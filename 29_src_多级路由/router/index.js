//该文件用于创建整个应用的路由器

import VueRouter from "vue-router";

import About from "../pages/About";
import Home from "../pages/Home";

import Message from "../pages/Message";
import News from "../pages/News";

import Vue from "vue";

//应用插件
Vue.use(VueRouter);
//创建并暴露一个路由器,路由创建是数组
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          //多级路由会自动配置斜杠，不要再继续添加斜杠
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
        },
      ],
    },
  ],
});
