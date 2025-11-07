import { defineStore } from 'pinia';
// ⚠️ توجه: نیازی به ایمپورت دستی useCookie و navigateTo نیست، چون Nuxt آن‌ها را Auto-Import می‌کند.
import { encryptToken, decryptToken } from '@/composables/useAuthCrypto';

const TOKEN_COOKIE_NAME = 'auth_token_encrypted';

export const useAuthStore = defineStore('auth', {
    // توجه: Pinia Store ها در Nuxt باید به صورت lazy-loaded تعریف شوند.
    // اما در Nuxt 4 با استفاده از defineStore این حالت به طور پیش فرض رعایت می شود.
    state: () => ({
        // undefined: حالت اولیه (در حال بررسی)، true: لاگین، false: لاگین نشده
        isLoggedIn: undefined, 
        user: null, // شیء کاربر {id, username}
        token: null, // توکن خام و رمزگشایی شده
    }),

    getters: {
        // وضعیت نهایی احراز هویت
        isAuthenticated: (state) => !!state.user && !!state.token && state.isLoggedIn === true,
    },

    actions: {
        // ۱. ذخیره اطلاعات پس از ورود موفق
        setLoginData(loginResponse) {
            console.log(loginResponse);
            this.user = loginResponse.user;
            this.token = loginResponse.token; // توکن خام
            this.isLoggedIn = true;

            // رمزنگاری و ذخیره توکن در کوکی. useCookie در این scope مجاز است.
            const encryptedToken = encryptToken(loginResponse.token);
            
            if (encryptedToken) {
                const tokenCookie = useCookie(TOKEN_COOKIE_NAME, {
                    maxAge: 60 * 60 * 24 * 7, // ۱ هفته
                    secure: process.env.NODE_ENV === 'production',
                    httpOnly: false, // برای دسترسی کلاینت جهت دیکد کردن
                    sameSite: 'lax',
                });
                tokenCookie.value = encryptedToken;
            } else {
                console.error("Token encryption failed. Aborting login save.");
            }
        },

        // ۲. واکشی توکن از کوکی در زمان رفرش
        initAuthFromCookie() {
             const encryptedToken = useCookie(TOKEN_COOKIE_NAME).value;
            
            if (encryptedToken) {
                const decryptedToken = decryptToken(encryptedToken); 

                if (decryptedToken) {
                    this.token = decryptedToken;
                    this.isLoggedIn = true;
                    
                    if (!this.user) {
                        this.user = { id: 0, username: 'Authenticated' };
                    }
                    
                    return true;
                } else {
                    // رمزگشایی ناموفق: توکن منقضی یا دستکاری شده است
                    this.logout();
                    return false;
                }
            }
            
            this.isLoggedIn = false;
            return false;
        },

        // ۳. خروج کاربر
        logout() {
            this.user = null;
            this.token = null;
            this.isLoggedIn = false;
            
            // حذف کوکی
            const tokenCookie = useCookie(TOKEN_COOKIE_NAME);
            tokenCookie.value = null; 

            // هدایت به صفحه لاگین
            navigateTo('/login');
        },
    }
});