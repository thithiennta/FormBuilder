import { v4 as uuid } from "uuid";
const MAX_UNDO_REDO = 20;
export default {
  USE_FORM(state, payload) {
    state.elements = JSON.parse(JSON.stringify(payload.elements));
    state.layoutSettings = JSON.parse(JSON.stringify(payload.layoutSettings));
    state.nextStates = JSON.parse(JSON.stringify(payload.nextStates));
    state.previousStates = JSON.parse(JSON.stringify(payload.previousStates));
  },
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
  DUPPLICATE_ELEMENT(state, payload) {
    const position = payload.parent.indexOf(payload.element);
    var dupElement = JSON.parse(JSON.stringify(payload.element));
    dupElement.rowId = uuid();
    payload.parent.splice(position, 0, dupElement);
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
  CHANGE_CURRENT_STEP(state, payload) {
    state.currentStep = payload;
  },
  CHANGE_PREVIEW_CURRENT_STEP(state, payload) {
    state.previewCurrentStep = payload;
  },
  GET_PREVIEW_ELEMENTS(state) {
    state.previewElements = JSON.parse(JSON.stringify(state.elements));
  },
  ADD_UNVALIDATE(state) {
    state.previewUnvalidate.push(false);
  },
  REMOVE_UNVALIDATE(state) {
    state.previewUnvalidate.pop();
  },
  REFRESH_UNVALIDATE(state) {
    state.previewUnvalidate = [];
  },
  CHANGE_SUBMIT_YET(state, payload) {
    state.isSubmitYet = payload === null ? null : !state.isSubmitYet;
  },
};
