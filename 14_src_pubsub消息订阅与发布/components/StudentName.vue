<template>
  <div class="student">
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ studentAge }}</h2>
    <h2>学生性别：{{ mySex }}</h2>
    <button @click="sendstudentName">点我传递姓名</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "StudentName",
  data() {
    return {
      mySex: "男",
      studentName: "张三",
      studentAge: 18,
    };
  },
  methods: {
    //触发$bus上的事件，把data传递过去
    sendstudentName() {
      // this.$bus.$emit("demo", this.studentName);
      pubsub.publish("hello", 666);
    },
  },
};
</script>

<style scoped>
/* 样式也可以不写 */
.student {
  background-color: pink;
}
</style>
