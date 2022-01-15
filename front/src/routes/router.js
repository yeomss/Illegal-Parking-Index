/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../views/MainView.vue";
import MapView from "../views/MapView.vue";
import TResultView from "../views/TResultView.vue";
import SignUpView from "../views/SignUpView.vue";
import LoginView from "../views/LoginView.vue";
import MyPageView from "../views/MyPageView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: MainView,
    },
    {
      path: "/signup",
      component: SignUpView,
    },
    {
      path: "/login",
      component: LoginView,
    },
    {
      path: "/result",
      component: MapView,
    },
    {
      path: "/mypage",
      component: MyPageView,
    },
  ],
});
