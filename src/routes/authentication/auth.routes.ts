import { RouteRecordRaw } from "vue-router";

const authRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.view.vue"),
    meta: {
      requiresAuth: false,
      showNavigation: false,
    },
  },
  //   {
  //     path: "/register",
  //     name: "register",
  //     component: () => import("@/views/register/register.view.vue"),
  //     meta: {
  //       requiresAuth: false,
  //       showNavigation: false,
  //     },
  //   },
  //   {
  //     path: "/otp",
  //     name: "one-time-password",
  //     component: () => import("@/views/otp/otp.view.vue"),
  //     meta: {
  //       requiresAuth: false,
  //       showNavigation: false,
  //     },
  //   },
];

export default authRoutes;
