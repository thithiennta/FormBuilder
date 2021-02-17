import customizerActions from "./customizerActions";
import customizerMutations from "./customizerMutations";
export default {
  namespaced: true,
  state: {
    isElementTabActive: true,
    haveActiveElement: false,
    activeElement: {},
  },
  actions: customizerActions,
  mutations: customizerMutations,
};
