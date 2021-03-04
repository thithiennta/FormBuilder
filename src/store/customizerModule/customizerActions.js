export default {
  addColumnItem({ commit }) {
    commit("REFRESH_STATE");
  },
  selectElement({ commit }, payload) {
    commit("SET_ACTIVE_ELEMENT", payload);
    commit("SET_ACTIVE_ELEMENT_STATUS", true);
  },
  hoverElement({ commit }, payload) {
    commit("SET_HOVER_ELEMENT", payload);
    commit("SET_HOVER_ELEMENT_STATUS", true);
  },
  unhoverElement({ commit }) {
    commit("SET_HOVER_ELEMENT", {});
    commit("SET_HOVER_ELEMENT_STATUS", false);
  },
  unselectElement({ commit }) {
    commit("SET_ACTIVE_ELEMENT", {});
    commit("SET_ACTIVE_ELEMENT_STATUS", false);
  },
  changePropertyValue({ commit }, payload) {
    commit("formModule/ADD_PREVIOUS_STATE", payload, { root: true });
    commit("UPDATE_ELEMENT", payload);
    commit("formModule/CLONE_STATE", payload, { root: true });
  },
  changeColumnWidth({ commit }, payload) {
    commit("formModule/ADD_PREVIOUS_STATE", payload, { root: true });
    commit("formModule/CLONE_STATE", payload, { root: true });
  },
  switchActiveTab({ commit }, payload) {
    commit("CHANGE_ELEMENT_ACTIVE_TAB", payload);
  },
  changeColumn({ commit }, payload) {
    commit("formModule/ADD_PREVIOUS_STATE", payload, { root: true });
    commit("CHANGE_COLUMN_TYPE", payload);
    commit("formModule/CLONE_STATE", payload, { root: true });
  },
};
