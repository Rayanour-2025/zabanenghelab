// /app/middleware/auth.global.js
import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (authStore.isLoggedIn === undefined) {
    authStore.initAuthFromCookie();
  }

  const userProtectedRoutes = [
    "/profile",
    "/question",
    "/submit_question",
    "/user_dashboard",
  ];
  const adminRoutes = [
    "/requestedWords",
    "/dashboard",
    "/reported_words",
    "/manage_comments",
    "/edit_word",
    "/dashboard/dictionaries",
    "/requests",
    "/words",
    "/reported_comments",
  ];
  const isUserRoute = userProtectedRoutes.some((route) =>
    to.path.startsWith(route)
  );
  const isAdminRoute = adminRoutes.some((route) => to.path.startsWith(route));

  if (isAdminRoute) {
    if (!authStore.isAuthenticated || authStore.isAdmin !== 1) {
      return navigateTo("/login"); // یا هدایت به یک صفحه "عدم دسترسی"
    }
  }

  // بررسی دسترسی کاربر عادی: اگر صفحه محافظت شده است ولی کاربر لاگین نیست
  if (isUserRoute && !authStore.isAuthenticated) {
    return navigateTo("/login");
  }

  // جلوگیری از ورود مجدد به صفحه لاگین در صورت احراز هویت
  if (to.path === "/login" && authStore.isAuthenticated) {
    return navigateTo("/");
  }
});
