import { defineStore } from 'pinia';
import { encryptToken, decryptToken } from '@/composables/useAuthCrypto';

const TOKEN_COOKIE_NAME = 'auth_token_encrypted';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: undefined, 
        user: null, 
        token: null, 
        isAdmin: 1
    }),

    getters: {
        isAuthenticated: (state) => !!state.user && !!state.token && state.isLoggedIn === true, 
    },

    actions: {
        setLoginData(loginResponse) {
            console.log(loginResponse);
            this.user = loginResponse.user;
            this.token = loginResponse.token;
            this.isLoggedIn = true; 
            this.isAdmin = loginResponse.user.isAdmin

            const encryptedToken = encryptToken(loginResponse.token);
            
            if (encryptedToken) {
                const tokenCookie = useCookie(TOKEN_COOKIE_NAME, {
                    maxAge: 60 * 60 * 24 * 7,
                    secure: process.env.NODE_ENV === 'production',
                    httpOnly: false, 
                    sameSite: 'lax',
                });
                tokenCookie.value = encryptedToken;
            } else {
                console.error("Token encryption failed. Aborting login save.");
            }
        },

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
                    this.logout();
                    return false;
                }
            }
            
            this.isLoggedIn = false;
            return false;
        },

        logout() {
            this.user = null;
            this.token = null;
            this.isLoggedIn = false;
            
            const tokenCookie = useCookie(TOKEN_COOKIE_NAME);
            tokenCookie.value = null; 

            navigateTo('/login');
        },
    }
});