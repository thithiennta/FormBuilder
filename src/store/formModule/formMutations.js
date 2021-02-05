const MAX_UNDO_REDO = 10;
export default {
  UPDATE_ELEMENTS(state, payload) {
    state.elements = payload;
  },
  DELETE_ELEMENT(state, payload) {
    const position = payload.parent.indexOf(payload.element);
    payload.parent.splice(position, 1);
  },
  LOAD_PREVIOUS_STATE(state) {
    state.elements = JSON.parse(JSON.stringify(state.previousStates[0]));
    state.previousStates.shift();
  },
  LOAD_NEXT_STATE(state) {
    state.elements = JSON.parse(JSON.stringify(state.nextStates[0]));
    state.nextStates.shift();
  },
  ADD_PREVIOUS_STATE(state) {
    if (state.previousStates.length === MAX_UNDO_REDO) {
      state.previousStates.pop();
    }
    state.previousStates.unshift(JSON.parse(JSON.stringify(state.elements)));
  },
  ADD_NEXT_STATE(state) {
    if (state.nextStates.length === MAX_UNDO_REDO) {
      state.nextStates.pop();
    }
    state.nextStates.unshift(JSON.parse(JSON.stringify(state.elements)));
  },
};
