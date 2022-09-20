<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllDoneTodo="clearAllDoneTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from "pubsub-js";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import MyList from "@/components/MyList";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  data() {
    return {
      todos:
        JSON.parse(localStorage.getItem("todos")) ||
        [
          //从浏览器本地读取数据，没有则读空。
          // { id: "001", title: "吃饭", done: false },
          // { id: "002", title: "睡觉", done: true },
          // { id: "003", title: "打代码", done: false },
        ],
    };
  },
  methods: {
    //添加的todo
    addTodo(todo) {
      console.log("我是app组件，我收到了数据");
      this.todos.unshift(todo);
      console.log(this);
    },
    //勾选或取消勾选
    checkTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.done = !todo.done;
    },
    //删除，采用过滤掉自己不要的
    // deleteTodo(id) {
    //   this.todos = this.todos.filter((todo) => todo.id !== id);
    // },
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    //全选或者取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },
    //清除已完成，返回todo.done不为真的。
    clearAllDoneTodo() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
    //更新todos的方法
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.title = title;
      });
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    //采用全局事件总线发布获取信息
    // this.$bus.$on("deleteTodo", this.deleteTodo);
    //采用消息订阅获取信息
    PubSub.subscribe("deleteTodo", this.deleteTodo);
    //更新todo事件
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    // this.$bus.$off("deleteTodo");
    this.$bus.$off("updateTodo");
  },

  //watch简写只能浅监视，不能深度监视，监视不到数据里面的变化
  //页面勾选todo,done变为true但是一刷新done还是变为false
  // watch: {
  //   todos(value) {
  //     localStorage.setItem("todos", JSON.stringify(value));
  //   },
  // },
  //深度监视
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid #6bb2de;
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
