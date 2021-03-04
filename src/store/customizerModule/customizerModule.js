import customizerActions from "./customizerActions";
import customizerMutations from "./customizerMutations";
export default {
  namespaced: true,
  state: {
    isElementTabActive: true,
    haveActiveElement: false,
    activeElement: {},
    hoverElement: {},
    haveHoverElement: false,
  },
  actions: customizerActions,
  mutations: customizerMutations,
};
