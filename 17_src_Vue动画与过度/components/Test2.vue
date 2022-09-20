<template>
  <div>
    <button class="btn btn-danger" @click="change">显示与隐藏</button>

    <!-- 使用的时候就是hello-enter-active hello-leave-active -->
    <!-- appear表示页面一刷新就执行进入，transition自定义名字 -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">你好啊！</h1>
    </transition-group>
  </div>
</template>

<script>
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
/* h1显示的时候激活 */
/* .hello-enter-active {
  animation: cartoon 1s;
}
/* h1隐藏的时候激活 */
/* .hello-leave-active {
  animation: cartoon 1s reverse;
}  */
/* 定义动画 */
/* @keyframes cartoon {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
} */
/* 采用过度必须写全（enter,leave,enter-active,leave-active,enter-to,leave-to），可以不用写动画 */
/* 过度进入的起点，出去的终点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
/* 过度中的样式 */
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 过度出去的起点，过度进入的终点 */
.hello-leave,
.hell0-enter-to {
  transform: translateX(0);
}
</style>
