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
const router = new VueRouter({
  routes: [
    {
      name: "guanyu",
      path: "/about",
      component: About,
      //配置元信息 true表示不可以访问
      meta: { title: "关于" },
    },
    {
      name: "zhuye",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      children: [
        {
          //多级路由会自动配置斜杠，不要再继续添加斜杠
          name: "xinwen",
          path: "news",
          component: News,
          meta: { isAuth: true, title: "新闻" },
          //独享内容
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.getItem("school") === "atguigu") {
                next();
              } else {
                alert("权限不对!");
              }
            } else {
              next();
            }
          },
        },
        {
          name: "xiaoxi",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "消息" },
          children: [
            {
              name: "xiangqing",
              // 采用query传参时的路由key配置方式
              path: "detail",
              meta: { title: "详情" },
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

//前置路由守卫
// router.beforeEach((to, from, next) => {
//   if (to.name === "xinwen" || to.name === "xiaoxi") {
//     if (localStorage.getItem("school") === "atguigu") {
//       next();
//     } else {
//       alert("权限不对！");
//     }
//   }else{
// next();
// }
// });

// 全局前置路由守卫，初始化的时候被调用，在每次切换路由的时候调用
// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuth) {
//     if (localStorage.getItem("school") === "atguigu") {
//       next();
//     } else {
//       alert("权限不对！");
//     }
//   }else{
// next();
// }
// });

//全局后置路由守卫,作用：
router.afterEach((to, from) => {
  document.title = to.meta.title || "硅谷系统";
});

export default router;
