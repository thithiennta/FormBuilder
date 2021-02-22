const MAX_UNDO_REDO = 20;
export default {
  UPDATE_ELEMENTS(state, payload) {
    state.elements = payload;
  },
  CLONE_STATE(state) {
    state.cloneState = JSON.parse(
      JSON.stringify({
        layoutSettings: state.layoutSettings,
        elements: state.elements,
      })
    );
    if (
      JSON.stringify(state.cloneState) ===
      JSON.stringify(state.previousStates[0])
    ) {
      state.previousStates.shift();
    }
  },
  DELETE_ELEMENT(state, payload) {
    const position = payload.parent.indexOf(payload.element);
    payload.parent.splice(position, 1);
  },
  LOAD_PREVIOUS_STATE(state) {
    const prevState = JSON.parse(JSON.stringify(state.previousStates[0]));
    state.elements = prevState.elements;
    state.layoutSettings = prevState.layoutSettings;
    state.previousStates.shift();
  },
  LOAD_NEXT_STATE(state) {
    const nextState = JSON.parse(JSON.stringify(state.nextStates[0]));
    state.elements = nextState.elements;
    state.layoutSettings = nextState.layoutSettings;
    state.nextStates.shift();
  },
  ADD_PREVIOUS_STATE(state) {
    if (state.previousStates.length === MAX_UNDO_REDO) {
      state.previousStates.pop();
    }
    state.previousStates.unshift(JSON.parse(JSON.stringify(state.cloneState)));
  },
  ADD_NEXT_STATE(state) {
    if (state.nextStates.length === MAX_UNDO_REDO) {
      state.nextStates.pop();
    }
    state.nextStates.unshift(JSON.parse(JSON.stringify(state.cloneState)));
  },
  UPDATE_LAYOUT_SETTINGS(state, payload) {
    state.layoutSettings = payload;
  },
};
