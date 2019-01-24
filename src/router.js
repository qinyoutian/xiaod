import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Botnav from "./views/Botnav.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "redirect",
      redirect:'/botnav/index'
    },
    {
      path: "/botnav",
      name: "botnav",
      component:Botnav,
      children:[
        {
          path: "",
          name: "redirect",
          redirect:'/botnav/index'
        },
        {
          path: "index",
          name: "index",
          component: Index
        },
        {
          path: "list",
          name: "list",
          component: () =>import("./views/List.vue"),
        },
        {
          path: "mine",
          name: "mine",
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: () =>import("./views/Mine.vue"),
        },
        {
          path: "cart",
          name: "cart",
          meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
          },
          component: () =>import("./views/Cart.vue"),
        },
      ]
    },
    {
      path: "/login",
      name: "login",
      component:  () =>import("./views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component:  () =>import("./views/Register.vue"),
    },
  ]
});
