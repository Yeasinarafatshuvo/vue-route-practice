import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";
import pageNotFound from "./components/pageNotFound.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: pageNotFound,
  },
  {
    name: "Profile",
    path: "/profile/:name",
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
