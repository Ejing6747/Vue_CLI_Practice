<template>
  <div class="student">
    <h2>学生名称：{{ studentName }}</h2>
    <h2>学生年龄：{{ studentAge }}</h2>
    <h2>学生性别：{{ mySex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑组件的bangding事件</button>
    <button @click="death">销毁当前组件的实例VC</button>
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
    sendStudentName() {
      //触发组件绑定的事件
      this.$emit("bangdin", this.studentName, 1, 2, 3, 4);
      this.$emit("demo");
    },
    unbind() {
      //解绑组件的一个绑定事件
      // this.$off("bangdin");
      //解绑多个事件,记住是数组
      // this.$off(["bangdin", "demo"]);
      //暴力解绑，解绑所有组件自定义事件
      this.$off();
    },
    death() {
      //组件销毁后所有实例的自定义事件都被解绑了
      this.$destroy();
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
