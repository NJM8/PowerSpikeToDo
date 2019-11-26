<template>
  <div
    class="card w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 flex-col p-8 m-4 mt-8 lg:mr-8"
  >
    <p class="text-2xl w-full text-center font-bold mb-2">Add To Do</p>
    <label for="title" class="label">Title:</label>
    <input
      type="text"
      name="title"
      class="input mb-4"
      v-model="title"
      @keyup.enter="submitTodo"
    />
    <label for="content" class="label">Content:</label>
    <input
      type="text"
      name="content"
      class="input"
      v-model="content"
      @keyup.enter="submitTodo"
    />
    <div class="w-full flex justify-end mt-6">
      <button
        @click="submitTodo"
        class="btn btn-primary"
        :class="titleOrContentEntered ? 'btn-error' : 'btn-primary'"
        :disabled="titleOrContentEntered"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "newTodo",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  computed: {
    titleOrContentEntered() {
      return this.title.length === 0 || this.content.length === 0;
    }
  },
  methods: {
    ...mapActions(["createTodo"]),
    submitTodo() {
      this.createTodo({ title: this.title, content: this.content })
        .then(() => {
          this.clearNewTodo();
        })
        .catch(() => {
          this.$toast.error({
            title: "Error",
            message: "There was a problem creating your todo, please try again."
          });
        });
    },
    clearNewTodo() {
      this.title = "";
      this.content = "";
    }
  }
};
</script>
