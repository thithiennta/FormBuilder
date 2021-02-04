<template>
  <a-collapse
    default-active-key="1"
    :bordered="false"
    expand-icon-position="right"
    class="property-wrapper"
  >
    <a-collapse-panel key="1" header="BORDER" class="customizer-container">
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
import BorderWidth from "./Border/BorderWidth";
import BorderRadius from "./Border/BorderRadius";
import BorderStyle from "./Border/BorderStyle";
import BorderColor from "./Border/BorderColor";
export default {
  components: {
    BorderStyle,
    BorderRadius,
    BorderColor,
    BorderWidth,
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
      return getElementsByType("border", this.activeElement.type);
    },
  },
};
</script>
<style scoped>
.customizer-container {
  margin-bottom: 10px !important;
}
</style>
