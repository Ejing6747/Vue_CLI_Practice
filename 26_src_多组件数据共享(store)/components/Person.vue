<template>
  <div>
    <h1>人员列表</h1>
    <h4 style="color: red">count组件的总和为:{{ sum }}</h4>
    <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="add_person" />
    <button @click="add_person">添加</button>
    <ul>
      <!-- <li v-for="p in $store.state.personList" :p.id>{{ p.name }}</li> -->
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { nanoid } from "nanoid";

export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    // ...mapState({ personList: "personList" }),
    ...mapState(["personList"]),

    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add_person() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>

<style></style>
