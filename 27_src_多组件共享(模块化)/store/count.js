//采用模块化，则index.js里面的state变成了模块
// const countOptions =
export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    ADD: function (state, value) {
      state.sum += value;
    },
    SUBSTRACT(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "尚硅谷",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
