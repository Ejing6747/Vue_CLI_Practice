<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
//引入
import Search from "./components/Search";
import List from "./components/List";
export default {
  name: "App",
  //注册
  components: { Search, List },
};
</script>
