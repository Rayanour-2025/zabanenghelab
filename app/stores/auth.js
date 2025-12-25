import { defineStore } from "pinia";
import { encryptToken, decryptToken } from "@/composables/useAuthCrypto";

const TOKEN_COOKIE_NAME = "auth_token_encrypted";
const ADMIN_COOKIE_NAME = "is_admin_encrypted";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: undefined,
    user: null,
    token: null,
    isAdmin: 0,
  }),

  getters: {
    isAuthenticated: (state) =>
      !!state.user && !!state.token && state.isLoggedIn === true,
  },

  actions: {
    setLoginData(loginResponse) {
      console.log(loginResponse);
      this.user = loginResponse.user;
      this.token = loginResponse.token;
      this.isLoggedIn = true;
      this.isAdmin = loginResponse.user.is_admin;

      const adminStatus = loginResponse.user.is_admin ? "1" : "0";
      this.isAdmin = loginResponse.user.is_admin;

      const encryptedAdmin = encryptToken(adminStatus);
      const encryptedToken = encryptToken(loginResponse.token);

      if (encryptedToken) {
        const tokenCookie = useCookie(TOKEN_COOKIE_NAME, {
          maxAge: 60 * 60 * 24 * 7,
          secure: process.env.NODE_ENV === "production",
          httpOnly: false,
          sameSite: "lax",
        });
        tokenCookie.value = encryptedToken;
      } else {
        console.error("Token encryption failed. Aborting login save.");
      }
      if (encryptedAdmin) {
        const adminCookie = useCookie(ADMIN_COOKIE_NAME, {
          maxAge: 60 * 60 * 24 * 7,
          secure: process.env.NODE_ENV === "production",
          httpOnly: false,
          sameSite: "lax",
        });
        adminCookie.value = encryptedAdmin;
      } else {
        console.error("Token encryption failed. Aborting login save.");
      }
    },

    initAuthFromCookie() {
      const encryptedToken = useCookie(TOKEN_COOKIE_NAME).value;
      const encryptedAdmin = useCookie(ADMIN_COOKIE_NAME).value;
      if (encryptedToken) {
        const decryptedToken = decryptToken(encryptedToken);
        const decryptedAdmin = encryptedAdmin
          ? decryptToken(encryptedAdmin)
          : null;
        if (decryptedToken) {
          this.token = decryptedToken;
          this.isLoggedIn = true;
          this.isAdmin = decryptedAdmin === "1" ? 1 : 0;
          if (!this.user) {
            this.user = { id: 0, username: "Authenticated" };
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
      this.isAdmin = 0;
      const tokenCookie = useCookie(TOKEN_COOKIE_NAME);
      tokenCookie.value = null;
      useCookie(ADMIN_COOKIE_NAME).value = null;
      navigateTo("/login");
    },
  },
});
