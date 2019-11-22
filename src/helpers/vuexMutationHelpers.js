export const vuexMutationHelpers = {
  SET: key => (state, payload) => {
    state[key] = payload;
  },
  ADD_TO_ARRAY: key => (state, payload) => {
    state[key].push(payload);
  },
  DELETE_FROM_ARRAY: key => (state, payload) => {
    const itemIndex = getIndex(key, state, {
      id: payload.id
    });
    if (itemIndex === -1) {
      throw `Cannot delete ${payload}. Not found in state.${key}`;
    }

    state[key].splice(itemIndex, 1);
  }
};

function getIndex(key, state, payload) {
  return state[key].findIndex(item => item.id === payload.id);
}
