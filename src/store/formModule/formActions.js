export default {
  deleteElement({ commit }, payload) {
    commit("DELETE_ELEMENT", payload);
  },
  updateElements({ commit }, payload) {
    commit("UPDATE_ELEMENTS", payload);
  },
};
