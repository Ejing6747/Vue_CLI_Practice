<template>
  <div class="demo">
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ studentAge }}</h2>
    <h2>学生性别：{{ mySex }}</h2>
    <input v-fbind:figure="studentName" />
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      mySex: this.studentSex,
    };
  },

  props: {
    studentName: {
      type: String,
      required: true, //限制studentNameame是必须的
    },
    studentAge: {
      type: Number,
      default: 99, //设置默认值为99
    },
    studentSex: {
      type: String,
      required: true, //require与default不同时存在
    },
  },

  methods: {
    changeSex() {
      if (this.mySex === "男") {
        this.mySex = "女";
      } else this.mySex = "男";
    },
  },
};
</script>

<style scoped>
/* 样式也可以不写 */
.demo {
  background-color: pink;
}
</style>
