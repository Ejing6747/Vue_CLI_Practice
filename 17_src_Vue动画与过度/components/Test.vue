<template>
  <div>
    <button class="btn btn-danger" @click="change">显示与隐藏</button>

    <!-- 使用的时候就是hello-enter-active hello-leave-active -->
    <!-- appear表示页面一刷新就执行进入，transition自定义名字 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
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
/* h1显示的时候激活 */
.hello-enter-active {
  animation: cartoon 1s;
}
/* h1隐藏的时候激活 */
.hello-leave-active {
  animation: cartoon 1s reverse;
}
/* 定义动画 */
@keyframes cartoon {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
