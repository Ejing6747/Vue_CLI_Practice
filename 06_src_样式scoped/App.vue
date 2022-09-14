<template>
  <div>
    <StudentName studentName="李四" studentSex="男" :studentAge="18" />
    <hr />
    <SchoolName></SchoolName>
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
};
</script>
