<template>
  <!-- 组件的结构 -->
  <div class="school">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校名称：{{ schoolAddress }}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
    <button @click="sendSchoolAddress">把学校地址给App</button>
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
  props: ["getSchoolName"],
  methods: {
    test() {
      this.hello();
    },
    sendSchoolName() {
      this.getSchoolName(this.schoolName);
    },
    //$emit,触发事件
    sendSchoolAddress() {
      this.$emit("tiggerSchool", this.schoolAddress);
    },
  },
};
</script>

<style scoped>
/* 组件的样式 */
.school {
  background: skyblue;
}
</style>
