import Vue from "vue";
import Vuex from "vuex";
import customizerModule from "./customizerModule/customizerModule";
import formModule from "./formModule/formModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    customizerModule,
    formModule,
  },
});
