export default {
  addColumnItem({ commit }) {
    commit("REFRESH_STATE");
  },
  selectElement({ commit }, payload) {
    commit("SET_ACTIVE_ELEMENT", payload);
    commit("SET_ACTIVE_ELEMENT_STATUS", true);
  },
  unselectElement({ commit }) {
    commit("SET_ACTIVE_ELEMENT", {});
    commit("SET_ACTIVE_ELEMENT_STATUS", false);
  },
  changePropertyValue({ commit }, payload) {
    // commit("formModule/ADD_PREVIOUS_STATE", payload, { root: true });
    commit("UPDATE_ELEMENT", payload);
    // commit("formModule/CLONE_STATE", payload, { root: true });
  },
  switchActiveTab({ commit }, payload) {
    commit("CHANGE_ELEMENT_ACTIVE_TAB", payload);
  },
};
