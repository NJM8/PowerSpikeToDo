import todoApi from "@/api/apiConfiguration";

export const apiCallHelper = {
  GET: (url, params) => {
    return new Promise((resolve, reject) => {
      todoApi
        .get(url, params)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  CREATE: (url, params) => {
    return new Promise((resolve, reject) => {
      todoApi
        .post(url, params)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  DELETE: url => {
    return new Promise((resolve, reject) => {
      todoApi
        .delete(url)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
