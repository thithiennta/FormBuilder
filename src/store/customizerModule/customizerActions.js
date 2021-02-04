export default {
  selectElement({ commit }, payload) {
    commit("SET_ACTIVE_ELEMENT", payload);
    commit("SET_ACTIVE_ELEMENT_STATUS", true);
  },
  unselectElement({ commit }) {
    commit("SET_ACTIVE_ELEMENT", {});
    commit("SET_ACTIVE_ELEMENT_STATUS", false);
  },
  changePropertyValue({ commit }, payload) {
    commit("UPDATE_ELEMENT", payload);
  },
};
