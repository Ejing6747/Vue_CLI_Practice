//该文件用于创建store

//引入vue
import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
//使用VueX
Vue.use(Vuex);

//准备action-用于响应组件中的动作
const actions = {
  // context是上下文中需要用到方法的总和
  ////////////////////////////////////////////////////////////////可以直接在components调用mutations
  //   add: function (context, value) {
  //     context.commit("ADD", value);
  //   },

  //   substract(context, value) {
  //     context.commit("SUBSTRACT", value);
  //     },

  //////////////////////////////////////////////////////////////上两个作用不大

  addOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("ADD", value);
    }
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value);
    }, 2000);
  },
};
//准备mutation-用于操作数据（state）
const mutations = {
  //state是下文中的state对象
  ADD: function (state, value) {
    state.sum += value;
  },
  SUBSTRACT(state, value) {
    state.sum -= value;
  },
};
//准备state-用于存储数据
const state = {
  sum: 0,
  school: "尚硅谷",
  subject: "前端",
};

//getter用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

//创建Store
const store = new Vuex.Store({
  // actions: actions,
  // mutations: mutations,
  // state:state,
  //简写
  actions,
  mutations,
  state,
  getters,
});

//暴露store
export default store;

//也可以简写，创建并暴露store
// export default new Vuex.Store({
//     actions,
//     mutations,
//     state,
// })
