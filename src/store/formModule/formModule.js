import formActions from "./formActions";
import formMutations from "./formMutations";
export default {
  namespaced: true,
  state: {
    layoutSettings: {},
    elements: [],
    previousStates: [],
    nextStates: [],
    previewelements: [],
    currentStep: 0,
    previewCurrentStep: 0,
    previewUnvalidate: [],
    isSubmitYet: null,
  },
  actions: formActions,
  mutations: formMutations,
};
