import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage.vue";
import ResultPage from "../components/ResultPage.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/file",
    },
    {
      path: "/file",
      component: MainPage,
    },
    {
      path: "/result",
      component: ResultPage,
    },
  ],
});
