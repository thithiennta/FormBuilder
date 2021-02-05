export default {
  deleteElement({ commit }, payload) {
    commit("DELETE_ELEMENT", payload);
  },
  updateElements({ commit }, payload) {
    commit("ADD_PREVIOUS_STATE");
    commit("UPDATE_ELEMENTS", payload);
  },
  undoAction({ commit }) {
    commit("ADD_NEXT_STATE");
    commit("LOAD_PREVIOUS_STATE");
  },
  redoAction({ commit }) {
    commit("ADD_PREVIOUS_STATE");
    commit("LOAD_NEXT_STATE");
  },
};
