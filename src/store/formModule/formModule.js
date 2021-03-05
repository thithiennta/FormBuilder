import formActions from "./formActions";
import formMutations from "./formMutations";
export default {
  namespaced: true,
  state: {
    layoutSettings: {},
    elements: [],
    previousStates: [],
    nextStates: [],
    currentStep: 0,
  },
  actions: formActions,
  mutations: formMutations,
};
