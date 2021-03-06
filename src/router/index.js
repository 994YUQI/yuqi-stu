import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ "../pages/Login")
  }
];

const router = new VueRouter({
  routes
});

export default router;
