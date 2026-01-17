import { useProfileStore } from "@/store/profile";
import Login from "@/views/Login/Login.vue";
import NotificationList from "@/views/NotificationList/NotificationList.vue";
import PaymentTypes from "@/views/Payment/PaymentTypes.vue";
import Signup from "@/views/Signup/Sign-up.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Login, name: "Login" },
  {
    path: "/signup",
    component: Signup,
    name: "Signup",
  },
  {
    path: "/notification-list",
    component: NotificationList,
    meta: { requiresAuth: true },
  },
  {
    path: "/payment-types",
    component: PaymentTypes,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const profileStore = useProfileStore();

  const IS_AUTHENTICATED = profileStore.getAccessToken() !== null;

  if (to.path === "/" && IS_AUTHENTICATED) {
    return "/payment-types";
  }

  if (to.meta.requiresAuth && !IS_AUTHENTICATED) {
    return {
      name: "Login",
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
