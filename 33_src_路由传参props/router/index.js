//该文件用于创建整个应用的路由器

import VueRouter from "vue-router";
//一级路由页面引入
import About from "../pages/About";
import Home from "../pages/Home";
//二级路由页面引入
import Message from "../pages/Message";
import News from "../pages/News";
//三级路由页面引入
import Detail from "../pages/Detail";

import Vue from "vue";

//应用插件
Vue.use(VueRouter);
//创建并暴露一个路由器,路由创建是数组
export default new VueRouter({
  routes: [
    {
      name: "guanyu",
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
          children: [
            {
              name: "xiangqing",
              // 采用query传参时的路由key配置方式
              path: "detail",

              // 采用params传参时的路由key的配置方式
              // path: "detail/:id/:title",
              component: Detail,
              //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传递给Detail组件
              // props: { a: 1, b: "hello" },

              //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由收到的params参数，传递给Detail
              // props: true,

              //props的第三种写法，值为函数
              // 1. 常用写法
              // props($route) {
              //   return {
              //     id: $route.query.id,
              //     title: $route.query.title,
              //   };
              // },
              //2.连续解结构赋值的写法，直接打开写
              props({ query: { id, title } }) {
                return {
                  id,
                  title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});
