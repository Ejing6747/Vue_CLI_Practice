import Vue from "vue";
import App from "./App.vue";
//引入插件
import plugins from "./plugins.js";
//应用插件，在Vue实例之前
Vue.use(plugins);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
