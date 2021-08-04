import Vue from "vue";
import VueRouter from "vue-router";

import Homepage from "@/pages/Homepage.vue";
import Filme from "@/pages/Filme";
import MyFilmes from "@/pages/MyFilmes";
import Erro from "@/pages/Erro";

Vue.use(VueRouter);

// const routes = [

// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage,
    },
    {
      path: "/filme/:id",
      name: "Filme",
      component: Filme,
      props: true,
    },
    {
      path: "/myfilmes",
      name: "MyFilmes",
      component: MyFilmes,
    },
    {
      path: "*",
      name: "Erro",
      component: Erro,
    },
  ],
});

export default router;
