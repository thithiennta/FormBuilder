<template>
  <a-collapse
    default-active-key="1"
    :bordered="false"
    expand-icon-position="right"
    class="property-wrapper"
  >
    <a-collapse-panel key="1" header="OPTION" class="customizer-container">
      <component
        v-for="(property, index) in propertiesArray"
        :key="index"
        :is="property"
      ></component>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { getElementsByType } from "../../../utils/settingSubPropertyUtils";
import { mapState } from "vuex";
import Options from "./Option/Options";
import OptionsDirection from "./Option/OptionsDirection";
import MarginLeft from "./Option/MarginLeft";
import MarginRight from "./Option/MarginRight";
import OptionSpacing from "./Option/OptionSpacing";
import DateFormat from "./Option/DateFormat";
export default {
  components: {
    Options,
    OptionsDirection,
    MarginLeft,
    MarginRight,
    OptionSpacing,
    DateFormat,
  },
  data() {
    return {
      propertiesArray: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.propertiesArray = this.getElementsByType();
  },
  watch: {
    activeElement() {
      this.propertiesArray = this.getElementsByType();
    },
  },
  methods: {
    getElementsByType() {
      return getElementsByType("option", this.activeElement.type);
    },
  },
};
</script>
<style scoped>
.customizer-container {
  margin-bottom: 10px !important;
}
</style>
