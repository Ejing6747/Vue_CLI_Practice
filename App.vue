<template>
  <!-- 快捷键：<+v 就可以直接出来模版 -->
  <div>
    <img src="./assets/logo.png" alt="logo" />
    <!-- 3.使用组件 -->
    <SchoolName></SchoolName>
    <StudentName></StudentName>
  </div>
</template>

<script>
// 1.引入组件
import SchoolName from "./components/SchoolName.vue";
import StudentName from "./components/StudentName.vue";
export default {
  name: "App",
  // 2.注册组件
  components: {
    StudentName,
    SchoolName,
  },
};
</script>

<style></style>
