<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <StudentName />
    <SchoolName />
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
    };
  },
};
</script>
<style>
.app {
  background-color: purple;
}
</style>
