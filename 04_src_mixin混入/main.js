import Vue from "vue";
import App from "./App.vue";
// import dayjs from "dayjs";

//引入dayjs
// var dayjs = require("dayjs");
// Vue.prototype.$dayjs = dayjs;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
