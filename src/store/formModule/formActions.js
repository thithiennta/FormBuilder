export default {
  deleteElement({ commit }, payload) {
    commit("ADD_PREVIOUS_STATE");
    commit("DELETE_ELEMENT", payload);
    commit("CLONE_STATE");
  },
  dupplicateElement({ commit }, payload) {
    commit("ADD_PREVIOUS_STATE");
    commit("DUPPLICATE_ELEMENT", payload);
    commit("CLONE_STATE");
  },
  updateElements({ commit }, payload) {
    commit("ADD_PREVIOUS_STATE");
    commit("UPDATE_ELEMENTS", payload);
    commit("CLONE_STATE");
  },
  updateProperty({ commit }) {
    commit("ADD_PREVIOUS_STATE");
    commit("CLONE_STATE");
  },
  undoAction({ commit }) {
    commit("ADD_NEXT_STATE");
    commit("LOAD_PREVIOUS_STATE");
    commit("CLONE_STATE");
  },
  redoAction({ commit }) {
    commit("ADD_PREVIOUS_STATE");
    commit("LOAD_NEXT_STATE");
    commit("CLONE_STATE");
  },
  changeLayoutProperty({ commit }, payload) {
    commit("UPDATE_LAYOUT_SETTINGS", payload);
  },
  initForm({ commit }) {
    commit("CLONE_STATE");
  },
};
