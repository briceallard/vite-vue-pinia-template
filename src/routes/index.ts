// import { useAuthStore } from "@/stores";
import { createWebHistory, createRouter } from "vue-router";
import authRoutes from "./authentication/auth.routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/404/404NotFound.view.vue"),
    },
    {
      path: "/",
      name: "home",
      redirect: "/login",
    },
    ...authRoutes,
  ],
});

/**
 * TODO: Add a guard to the router to check if the user is authenticated.
 * If the user is not authenticated, redirect the user to the login page.
 * Use the router.beforeEach hook to check if the user is authenticated.
 */
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   let refreshToken = localStorage.getItem("refreshToken");
//   let accessToken = authStore.accessToken;

//   if (to.meta.requiresAuth && !accessToken) next("/login");
//   else next();
// });

export default router;
