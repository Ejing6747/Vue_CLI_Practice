<template>
  <div class="Count">
    <h1>当前的总和为：{{ mysum }}</h1>
    <h4>当前求和放大10倍:{{ $store.getters.bigSum }}</h4>
    <h4>我在{{ myschool }}学习{{ mysubject }}</h4>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
//引入mapState,帮助寻找state中的值
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",

  data() {
    return {
      n: 1,
    };
  },
  computed: {
    //这是程序员自己写的计算属性
    // mysum() {
    //   return this.$store.state.sum;
    // },
    // myschool() {
    //   return this.$store.state.school;
    // },
    // mysubject() {
    //   return this.$store.state.subject;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    //通过mapState写的计算属性,从state中读取数据
    ...mapState({ mysum: "sum", myschool: "school", mysubject: "subject" }),
    // ...mapGetters({ bigSum: "bigSum" }),
    // 可以简写为数组形式，但是不能简写为｛bigSum｝
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      this.$store.commit("ADD", this.n);
    },
    decrement() {
      this.$store.commit("SUBSTRACT", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("addOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("addWait", this.n);
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
