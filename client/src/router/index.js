import Vue from "vue";
import VueRouter from "vue-router";
import CarCatalogue from "@/views/CarCatalogue.vue";
import Register from "@/views/Register";
import { getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CarCatalogue",
    component: CarCatalogue,
    meta: {
      title: "CarCatalogue",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "CarCatalogue",
      requiresAuth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | CarRental`;
  next();
});

router.beforeEach(async (to, from, next) => {
  let user = getAuth().currentUser;
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      return next();
    }
    return next({ name: "Home" });
  }
  return next();
});

export default router;
