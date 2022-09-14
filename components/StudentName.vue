<template>
  <div>
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ studentAge }}</h2>
    <button @click="showName">点我提示学生名</button>
  </div>
</template>
<script>
export default {
  name: "StudentName",
  data() {
    return {
      studentName: "张三",
      studentAge: 18,
    };
  },
  methods: {
    showName() {
      alert(this.studentName);
    },
  },
};
</script>
<style>
/* 样式也可以不写 */
</style>
