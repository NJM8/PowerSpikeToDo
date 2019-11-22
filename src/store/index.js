import Vue from "vue";
import Vuex from "vuex";
import { vuexMutationHelpers } from "@/helpers/vuexMutationHelpers";
import { vuexActionHelpers } from "@/helpers/vuexActionHelpers";

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
    getTodos: vuexActionHelpers.CRU("getTodos", "SET_TODOS"),
    createTodo: vuexActionHelpers.CRU("createTodo", "ADD_TODO"),
    deleteTodo: vuexActionHelpers.DELETE("deleteTodo", "DELETE_TODO")
  }
});
