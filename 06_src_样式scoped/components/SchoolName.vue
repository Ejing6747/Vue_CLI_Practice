<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校名称：{{ schoolAddress }}</h2>
    <button @click="test">点我测试</button>
  </div>
</template>

<script>
export default {
  name: "SchoolName",
  data() {
    return {
      schoolName: "家里蹲大学",
      schoolAddress: "哔站",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style scoped>
/* 组件的样式 */
.demo {
  background: skyblue;
}
</style>
