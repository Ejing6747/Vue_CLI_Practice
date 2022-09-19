<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校名称：{{ schoolAddress }}</h2>
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
    demo(name) {
      console.log("我是school组件，我收到了studentName", name);
    },
  },
  mounted() {
    //demo函数接受到data
    this.$bus.$on("demo", this.demo);
  },
  beforeDestroy() {
    this.$bus.$off("demo");
  },
};
</script>

<style scoped>
/* 组件的样式 */
.school {
  background: skyblue;
}
</style>
