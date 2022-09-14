<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校名称：{{ schoolAddress }}</h2>
    <h2>当前时间：{{ time | formatDate("YYYY-MM-DD") }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
//引入一个混合
import { mixin } from "../mixin.js";

export default {
  name: "SchoolName",
  data() {
    return {
      // time:,
      schoolName: "家里蹲大学",
      schoolAddress: "哔站",
      time: new Date(),
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
  //应用混合
  mixins: [mixin],
};
</script>

<style>
/* 组件的样式 */
.demo {
  background: skyblue;
}
</style>
