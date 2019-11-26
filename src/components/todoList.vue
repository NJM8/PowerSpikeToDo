<template>
  <div>
    <transition name="fade">
      <div
        v-show="todos.length > 0"
        class="flex flex-col items-center lg:flex-row lg:items-start w-full p-4"
      >
        <div
          class="flex flex-col flex-shrink-0 w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 items-center mx-4"
        >
          <p class="card text-3xl font-bold p-6 mb-4 text-center">
            To Do List:
          </p>
          <transition name="fade">
            <div v-show="todos.length > 1" class="card flex p-6">
              <label for="sortBy" class="label pr-2 text-xl">Order:</label>
              <select name="sortBy" id="sortBy" v-model="sortBy" class="input">
                <option value="title">Title</option>
                <option value="content">Content</option>
                <option value="created">Date</option>
              </select>
            </div>
          </transition>
        </div>
        <transition-group
          name="list-transitions"
          tag="div"
          class="flex flex-wrap justify-center p-2 w-7/8"
        >
          <div v-for="todo in sortedTodos" :key="todo.id">
            <todo :todo="todo" :key="todo.id"></todo>
          </div>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import todo from "@/components/todo";

export default {
  name: "todoList",
  data() {
    return {
      sortBy: "title"
    };
  },
  components: {
    todo
  },
  computed: {
    ...mapGetters(["todos"]),
    // dynamic computed to sort todos, uses sortBy select input selection.
    sortedTodos() {
      if (this.todos.length > 0) {
        return this.todos
          .slice()
          .sort((a, b) => (a[this.sortBy] > b[this.sortBy] ? 1 : -1));
      } else {
        return [];
      }
    }
  }
};
</script>
