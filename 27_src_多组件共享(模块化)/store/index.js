//该文件用于创建store

//引入vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";

import countOptions from "./count";

import personOptions from "./person";

//使用VueX
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    countOptions,
    //简写
    personOptions,
  },
});
export default store;
