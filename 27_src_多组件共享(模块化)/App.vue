<template>
  <div>
    <Count></Count>
    <Person></Person>
  </div>
</template>

<script>
//引入
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  //注册
  components: { Count,Person},
};
</script>

</style>
