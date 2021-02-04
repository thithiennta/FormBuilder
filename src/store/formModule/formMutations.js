export default {
  UPDATE_ELEMENTS(state, payload) {
    state.elements = payload;
  },
  DELETE_ELEMENT(state, payload) {
    const position = payload.parent.indexOf(payload.element);
    payload.parent.splice(position, 1);
  },
};
