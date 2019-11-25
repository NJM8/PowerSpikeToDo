import Vue from "vue";
import Vuex from "vuex";
import { vuexMutationHelpers } from "@/helpers/vuexMutationHelpers";
import { vuexActionHelpers } from "@/helpers/vuexActionHelpers";
import todoApi from "@/api/todoApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    SET_TODOS: vuexMutationHelpers.SET("todos"),
    ADD_TODO: vuexMutationHelpers.ADD_TO_ARRAY("todos"),
    DELETE_TODO: vuexMutationHelpers.DELETE_FROM_ARRAY("todos")
  },
  actions: {
    getTodos: ({ commit }) => {
      todoApi
        .getTodos()
        .then(response => {
          commit("SET_TODOS", response);
        })
        .catch(() => {
          Vue.prototype.$toast.error({
            title: "Error",
            message:
              "There was a problem fetching your todos, please refresh the page."
          });
        });
    },
    createTodo: ({ dispatch }, params) => {
      return new Promise((resolve, reject) => {
        todoApi
          .createTodo(params)
          .then(() => {
            dispatch("getTodos");
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    deleteTodo: vuexActionHelpers.DELETE("deleteTodo", "DELETE_TODO")
  }
});
