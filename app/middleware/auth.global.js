// /app/middleware/auth.global.js
import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    
    if (authStore.isLoggedIn === undefined) {
        authStore.initAuthFromCookie();
    }

    const protectedRoutes = ['/words', '/profile', '/dashbord']; 
    const isProtectedRoute = protectedRoutes.some(route => to.path.startsWith(route));

    if (isProtectedRoute && !authStore.isAuthenticated) {
        return navigateTo('/login');
    }

    if (to.path === '/login' && authStore.isAuthenticated) {
        return navigateTo('/');
    }
});