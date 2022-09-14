<template>
  <div>
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ studentAge }}</h2>
    <h2>学生性别：{{ mySex }}</h2>
    <button @click="changeSex">点我改变性别</button>
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      // studentName: "张三",
      // studentAge: 18,
      // studentSex: "男",
      mySex: this.studentSex,
    };
  },
  //配置外部数据
  // 方式一：显示接收,简单接收
  // props: ["studentName", "studentAge", "studentSex"],
  // 方式二：接收数据的时候限制类型
  // props: {
  //   studentName: String,
  //   studentAge: Number,
  //   studentSex: String,
  // },
  // 方式三：完整接收+权限设置
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

<style>
/* 样式也可以不写 */
</style>
