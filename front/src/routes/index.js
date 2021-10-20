import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
// import ResultPage from "../components/ResultPage.vue";
import SignUpPage from "../components/SignUpPage.vue";
import LoginPage from "../components/LoginPage.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: MainPage,
    },
    {
      path: "/signup",
      component: SignUpPage,
    },
    {
      path: "/login",
      component: LoginPage,
    },
  ],
});
