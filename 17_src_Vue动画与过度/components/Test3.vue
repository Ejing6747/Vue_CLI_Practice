<template>
  <div>
    <button class="btn btn-danger" @click="change">显示与隐藏</button>

    <!-- 使用的时候就是hello-enter-active hello-leave-active -->
    <!-- appear表示页面一刷新就执行进入，transition自定义名字 -->
    <transition-group appear name="animate__animated animate__bounce" enter-active-class="animate__swing" leave-active-class="animate__backOutUp">
      <h1 v-show="isShow" key="1">animate库!</h1>
      <h1 v-show="isShow" key="2">animate库!</h1>
    </transition-group>
  </div>
</template>

<script>
//引入CSS样式，提前安装：npm install animate.css
import "animate.css";
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    change() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>
