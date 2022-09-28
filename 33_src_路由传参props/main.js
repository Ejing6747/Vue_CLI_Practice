//引入Vue
import Vue from "vue";
//引入App
import App from "./App";
// //引入vue-router插件
// import VueRouter from "vue-router";
//引入路由器
import router from "./router/index";

//关闭Vue的生产提示
Vue.config.productionTip = false;
// //应用插件
// Vue.use(VueRouter);
//创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
  //应用路由器
  router: router,
});
