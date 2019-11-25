<template>
  <div id="app" class="flex flex-col w-full app-max-width">
    <div class="flex flex-col lg:flex-row items-center w-full items-start">
      <div class="flex flex-col items-center w-full md:w-1/2 lg:w-2/3">
        <div
          class="card w-11/12 md:w-full lg:w-2/3 mt-16 py-6 px-10 text-center flex-shrink-0"
        >
          <p class="text-5xl font-bold">
            PowerSpike <span class="whitespace-no-wrap">To Do</span>
          </p>
        </div>
        <p class="card p-4 mt-8 font-bold">
          Created by <span class="text-lg">Nate Mallison</span>
        </p>
      </div>
      <new-todo />
    </div>
    <todo-list class="mt-8 lg:mt-16" />
  </div>
</template>

<style src="./assets/styles.css"></style>s
<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>

<script>
import { mapActions } from "vuex";
import todoList from "@/components/todoList";
import newTodo from "@/components/newTodo";
export default {
  name: "app",
  components: {
    todoList,
    newTodo
  },
  methods: {
    ...mapActions(["getTodos"])
  },
  created() {
    this.$toast.success({
      title: "Getting todos",
      message: "Fetching your todo list..."
    });
    this.getTodos();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
