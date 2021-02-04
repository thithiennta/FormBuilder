export default {
  SET_ACTIVE_ELEMENT(state, payload) {
    state.activeElement = payload;
  },
  SET_ACTIVE_ELEMENT_STATUS(state, payload) {
    state.haveActiveElement = payload;
  },
  UPDATE_ELEMENT(state, payload) {
    state.activeElement = payload;
  },
};
