<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <!-- 添加编辑框，绑定鼠标失去焦点事件,失去焦点是传递当前todo,和当前事件 -->
      <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handlerBlur(todo, $event)" ref="inputTitle" />
    </label>
    <!-- 右浮动，所以先写的靠右 -->
    <button v-show="!isEdit" class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import PubSub from "pubsub-js";
export default {
  name: "MyItem",
  props: ["todo"],
  data() {
    return {
      isEdit: "",
    };
  },
  methods: {
    //勾选
    handleCheck(id) {
      //勾选，则将id对应的done值取反,
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    //编辑，函数执行完之后才重新解析模板
    handleEdit(todo) {
      console.log(this.todo);
      //判断todo是否有isEdit属性
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      //拿到输入框，获取焦点，上方的函数执行完毕，解析模板的时候执行这个函数
      this.$nextTick(() => {
        // focus找不到，因为inputTitle是undefine,原因是在input标签中忘了ref
        // console.log(this.$refs.inputTitle);
        this.$refs.inputTitle.focus();
      });
    },
    //鼠标失去焦点事件
    handlerBlur(todo, event) {
      // this.isEdit = false;为什么不可以用this
      todo.isEdit = false;
      if (event.target.value.trim() === "") {
        return alert("不能输入空");
      } else {
        this.$bus.$emit("updateTodo", todo.id, event.target.value);
      }
    },
    //删除
    handleDelete(id) {
      if (confirm(`确定删除编号为${id}的todo吗`)) {
        console.log(this);
        //1.采用props传参
        // this.deleteTodo(id);
        //2.采用全局事件总线传参
        // this.$bus.$emit("deleteTodo", id);
        //3.采用消息订阅与发布传参
        PubSub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
</style>
