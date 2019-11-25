<template>
  <div class="card p-6 m-4">
    <div class="flex">
      <div class="text-right pr-2">
        <p class="mt-2">Title:</p>
        <p class="mt-2">Content:</p>
        <p class="mt-2">Created:</p>
      </div>
      <div>
        <p class="font-xl font-bold mt-2">{{ todo.title }}</p>
        <p class="font-xl font-bold mt-2">{{ todo.content }}</p>
        <p class="font-xl font-bold mt-2">{{ getTodoCreatedDate }}</p>
      </div>
    </div>
    <div class="flex justify-end w-full mt-6">
      <button class="btn btn-primary" @click="deleteTodo(todo)">
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
      return date.format("MM/DD/YY hh:mm a");
    }
  },
  methods: {
    ...mapActions(["deleteTodo"])
  }
};
</script>
