<template>
  <div class="app">
    <h1>{{ msg }} {{ schooladdress }}的{{ studentname }}同学</h1>
    <!-- 方法2.给student组件的实例对象VC绑定一个事件,给谁绑定事件，谁就触发事件 -->
    <!-- <StudentName v-on:bangdin.once="getStudentName" studentName="李四" studentSex="男" :studentAge="18" /> -->
    <StudentName v-on:bangdin="getStudentName" @demo="m1" studentName="李四" studentSex="男" :studentAge="18" />
    <!-- 方法1.通过父组件给子组件传递函数类型的props实现子组件传递给父组件 -->
    <!-- 方法3.通过ref拿到组件的实例对象 -->
    <SchoolName :getSchoolName="getSchoolName" ref="school"></SchoolName>
    <!-- <SchoolName ref="school"></SchoolName> -->
  </div>
</template>

<script>
import StudentName from "@/components/StudentName";
import SchoolName from "@/components/SchoolName";
export default {
  name: "App",
  components: {
    SchoolName,
    StudentName,
  },
  data() {
    return {
      msg: "你好啊!",
      studentname: "",
      schooladdress: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("收到了School的名字", name);
    },
    getStudentName(name, ...params) {
      console.log("收到了学生的名字", name, params);
      this.studentname = name;
    },
    getSchoolAddress(address) {
      console.log("收到了School的名字", address);
    },
    m1() {
      console.log("m1被触发了");
    },
  },
  //App组件挂载完毕后，当ref的组件触发triggerschool事件，就调用getSchoolName方法
  mounted() {
    // this.$refs.school.$on("tiggerSchool", this.getSchoolAddress); //绑定自定义事件
    // this.$refs.school.$once("tiggerSchool", this.getSchoolAddress); //绑定自定义事件，只用一次
    // this.$refs.school.$once("tiggerSchool", function () {
    //   console.log("收到了School的名字", address);
    //   this.schooladdress = address; //回调里面的this是触发事件的组件,SchoolName
    // })
    this.$refs.school.$once("tiggerSchool", (address) => {
      console.log("收到了School的名字", address);
      this.schooladdress = address; //箭头函数没有this,this就是APP组件。
    });
  },
};
</script>
<style>
.app {
  background-color: purple;
}
</style>
