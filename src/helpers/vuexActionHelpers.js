import todoApi from "@/api/todoApi";

export const vuexActionHelpers = {
  CRU: (apiFunction, vuexMutation) => ({ commit }, params) => {
    return new Promise((resolve, reject) => {
      todoApi[apiFunction](params)
        .then(result => {
          commit(vuexMutation, result);
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  DELETE: (apiFunction, vuexMutation) => ({ commit }, params) => {
    return new Promise((resolve, reject) => {
      todoApi[apiFunction](params)
        .then(result => {
          commit(vuexMutation, params);
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
