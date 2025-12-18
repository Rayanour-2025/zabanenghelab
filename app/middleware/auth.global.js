// /app/middleware/auth.global.js
import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (authStore.isLoggedIn === undefined) {
    authStore.initAuthFromCookie();
  }

    const protectedRoutes = ['/words', '/dashboard', '/edit_word', '/reported_words', '/reported_comments', '/manage_comments', '/profile', '/question', '/requestedWords', '/requests', '/submit_question', '/user_dashboard', '/dashboard/dictionaries']; 
    const isProtectedRoute = protectedRoutes.some(route => to.path.startsWith(route));

    if (isProtectedRoute && !authStore.isAuthenticated) {
        return navigateTo('/login');
    }

    if (to.path === '/login' && authStore.isAuthenticated) {
        return navigateTo('/');
  }
});