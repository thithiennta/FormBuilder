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
  initForm({ commit }, payload) {
    commit("USE_FORM", payload);
    commit("CLONE_STATE");
  },
  loadSavedForm({ commit }, payload) {
    commit("USE_FORM", payload);
    commit("CLONE_STATE");
  },
  changeCurrentStep({ commit }, payload) {
    commit("CHANGE_CURRENT_STEP", payload);
    commit("CLONE_STATE");
  },
  goNextStep({ state, commit }) {
    const step = state.previewCurrentStep + 1;
    commit("CHANGE_PREVIEW_CURRENT_STEP", step);
    commit("CHANGE_SUBMIT_YET", null);
  },
  goPreviousStep({ state, commit }) {
    const step = state.previewCurrentStep - 1;
    commit("CHANGE_PREVIEW_CURRENT_STEP", step);
    commit("CHANGE_SUBMIT_YET", null);
    commit("REFRESH_UNVALIDATE");
  },
  goSubmit({ state, commit }) {
    const step = state.previewCurrentStep;
    commit("CHANGE_PREVIEW_CURRENT_STEP", step);
  },
  previewForm({ commit }) {
    commit("GET_PREVIEW_ELEMENTS");
  },
  addUnvalidate({ commit }) {
    commit("ADD_UNVALIDATE");
  },
  removeUnvalidate({ commit }) {
    commit("REMOVE_UNVALIDATE");
  },
  checkValidate({ commit }) {
    commit("CHANGE_SUBMIT_YET");
  },
};
