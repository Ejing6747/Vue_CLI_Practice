//引入Vue
import Vue from "vue";
//引入App
import App from "./App";

import vueResource from "vue-resource";

import store from "./store";

//关闭Vue的生产提示
Vue.config.productionTip = false;

Vue.use(vueResource);

//创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
  //配置store
  store,
  //安装全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
});
