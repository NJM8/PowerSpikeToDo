<template>
  <div class="card p-6 m-4 min-w-sm">
    <div>
      <p class="text-3xl font-bold border-b border-gray-500 text-center">
        {{ todo.title || "-" }}
      </p>
      <p class="text-lg mt-4 mb-8">{{ todo.content || "-" }}</p>
      <p class="text-xs mt-2 text-center">created on</p>
      <p class="text-xs font-bold text-center">{{ getTodoCreatedDate }}</p>
    </div>
    <div class="w-full text-center">
      <button class="btn btn-primary mt-4" @click="deleteTodo(todo)">
        Complete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import dayjs from "dayjs";

export default {
  name: "todo",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  computed: {
    getTodoCreatedDate() {
      const date = dayjs.unix(this.todo.created);
      return date.format("MM/DD/YY @ hh:mma");
    }
  },
  methods: {
    ...mapActions(["deleteTodo"])
  }
};
</script>
