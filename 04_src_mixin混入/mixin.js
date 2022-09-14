import dayjs from "dayjs";
export const mixin = {
  filters: {
    formatDate(value, str = "YYYY-MM-DD hh:mm:ss") {
      //str是管道符后的函数参数YYYY-MM-DD
      return dayjs(value).format("YYYY-MM-DD hh:mm:ss");
    },
  },

  mounted() {
    var that = this;
    var timer = setInterval(function () {
      that.time = new Date();
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
