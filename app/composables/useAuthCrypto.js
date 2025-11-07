import CryptoJS from 'crypto-js';
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';

let SECRET_KEY = null;

// تابع کمکی برای اطمینان از مقداردهی اولیه کلید سری در زمان فراخوانی (Lazy Initialization)
function getSecretKey() {
    // اگر کلید قبلاً مقداردهی نشده باشد، آن را با استفاده از کانتکس Nuxt می‌خواند.
    if (SECRET_KEY === null) {
        const config = useRuntimeConfig(); 
        SECRET_KEY = config.public.authSecretKey;

        if (!SECRET_KEY) {
            console.error("AUTH_SECRET_KEY in runtimeConfig is missing!");
        }
    }
    return SECRET_KEY;
}

/**
 * تابع رمزنگاری توکن با استفاده از کلید سری (AES)
 * @param {string} token توکن خام از سرور
 * @returns {string | null} توکن رمزنگاری شده
 */
export function encryptToken(token) {
    const key = getSecretKey();
    if (!token || !key) return null;
    try {
        return CryptoJS.AES.encrypt(token, key).toString();
    } catch (e) {
        console.error("Encryption failed:", e);
        return null;
    }
}

/**
 * تابع رمزگشایی توکن با استفاده از کلید سری (AES)
 * @param {string} encryptedToken توکن رمزنگاری شده از کوکی
 * @returns {string | null} توکن رمزگشایی شده (خام)
 */
export function decryptToken(encryptedToken) {
    const key = getSecretKey();
    if (!encryptedToken || !key) return null;
    try {
        const bytes  = CryptoJS.AES.decrypt(encryptedToken, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        
        return decrypted || null;
    } catch (e) {
        // این خطا معمولاً نشان‌دهنده دستکاری توکن یا استفاده از کلید اشتباه است
        console.error("Decryption failed. Token might be invalid or tampered.", e);
        return null;
    }
}

/**
 * کامپوسبل برای دسترسی آسان به توکن و وضعیت احراز هویت
 */
export function useAuthToken() {
    const store = useAuthStore();
    return { 
        token: computed(() => store.token),
        user: computed(() => store.user),
        isLoggedIn: computed(() => store.isAuthenticated)
    };
}