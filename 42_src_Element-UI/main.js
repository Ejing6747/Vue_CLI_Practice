//引入Vue
import Vue from "vue";
//引入App
import App from "./App";
import { Button, Row } from "element-ui";

//关闭Vue的生产提示
Vue.config.productionTip = false;
//Button.name 是button的名字，默认el-Button
Vue.component("el-button", Button);
Vue.component("el-row", Row);
// //应用插件
// Vue.use(VueRouter);
//创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
});
