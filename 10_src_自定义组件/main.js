import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  mounted() {
    setTimeout(() => {
      this.$destroy;
    }, 3000);
  },
  render: (h) => h(App),
});
