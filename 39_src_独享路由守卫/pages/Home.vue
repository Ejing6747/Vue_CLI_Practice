<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- keep-alive保持活跃,inclue是需要保存的！！！组件名，组件名 -->
      <!-- 缓存一个 <keep-alive inclue="News"> -->
      <!-- 缓存多个用数组 -->
      <keep-alive :inclue="['News', 'Message']">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // beforeDestroy() {
  //   console.log("Home组件即将被销毁");
  // },
  // mounted() {
  //   console.log("Home组件挂载完毕");
  // },
};
</script>

<style></style>
