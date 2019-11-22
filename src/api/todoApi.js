require("./ApiConfiguration");

import { apiCallHelper } from "@/helpers/apiCallHelper";

export default {
  getTodos() {
    return apiCallHelper.GET(`/`);
  },
  createTodo(params) {
    return apiCallHelper.CREATE(`/new`, params);
  },
  deleteTodo(params) {
    return apiCallHelper.DELETE(`/delete/${params.id}`);
  }
};
