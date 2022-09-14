<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校名称：{{ schoolAddress }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互的代码,采用默认暴露。const school 和 Vue.extend可以不写
// const school = Vue.extend({
export default {
  name: "SchoolName",
  data() {
    return {
      schoolName: "家里蹲大学",
      schoolAddress: "哔站",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  background: skyblue;
}
</style>
