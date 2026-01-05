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
  const adminForbiddenRoutes = ["/question", "/submit_question"];
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
  const isAdminForbidden = adminForbiddenRoutes.some((route) =>
    to.path.startsWith(route)
  );
  if (isAdminRoute) {
    if (!authStore.isAuthenticated || authStore.isAdmin !== 1) {
      return navigateTo("/login");
    }
  }

  if (isUserRoute && !authStore.isAuthenticated) {
    return navigateTo("/login");
  }

  if (to.path === "/login" && authStore.isAuthenticated) {
    return navigateTo("/");
  }
  if (
    isAdminForbidden &&
    authStore.isAuthenticated &&
    authStore.isAdmin === 1
  ) {
    return navigateTo("/dashboard");
  }
});
