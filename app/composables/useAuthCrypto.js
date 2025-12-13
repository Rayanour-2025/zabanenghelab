import CryptoJS from 'crypto-js';
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';

let SECRET_KEY = null;

function getSecretKey() {
    if (SECRET_KEY === null) {
        const config = useRuntimeConfig(); 
        SECRET_KEY = config.public.authSecretKey || "u8F#9vQ!rT2wXs7z@L4pB&kD$eJ1mN^cR0yG+H*oZqS5fA6tU";

        if (!SECRET_KEY) {
            console.error("AUTH_SECRET_KEY in runtimeConfig is missing!");
        }
    }
    return SECRET_KEY;
}

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

export function decryptToken(encryptedToken) {
    const key = getSecretKey();
    if (!encryptedToken || !key) return null;
    try {
        const bytes  = CryptoJS.AES.decrypt(encryptedToken, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        
        return decrypted || null;
    } catch (e) {
        console.error("Decryption failed. Token might be invalid or tampered.", e);
        return null;
    }
}

export function useAuthToken () {
    const store = useAuthStore();
    return { 
        token: computed(() => store.token),
        user: computed(() => store.user),
        isLoggedIn: computed(() => store.isAuthenticated)
    };
}