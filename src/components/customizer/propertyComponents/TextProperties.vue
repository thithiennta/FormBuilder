<template>
  <a-collapse
    default-active-key="1"
    :bordered="false"
    expand-icon-position="right"
    class="property-wrapper"
  >
    <a-collapse-panel key="1" header="TEXT" class="customizer-container">
      <component
        v-for="(property, index) in propertiesArray"
        :key="index"
        :is="property"
      ></component>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { mapState } from "vuex";
import { getElementsByType } from "../../../utils/settingSubPropertyUtils";
import FontSize from "./Text/FontSize";
import TextColor from "./Text/TextColor";
import TextValue from "./Text/TextValue";
import TextAlign from "./Text/TextAlign";
import FontWeight from "./Text/FontWeight";
import FontStyle from "./Text/FontStyle";
import InputName from "./Text/InputName";
import InputPlaceholder from "./Text/InputPlaceholder";
import FieldName from "./Text/FieldName";
import StepTitle from "./Text/StepTitle";
export default {
  components: {
    FontSize,
    TextColor,
    TextValue,
    TextAlign,
    FontStyle,
    FontWeight,
    InputName,
    InputPlaceholder,
    FieldName,
    StepTitle,
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
      return getElementsByType("text", this.activeElement.type);
    },
  },
};
</script>

<style scoped>
.customizer-container {
  margin-bottom: 10px !important;
}
</style>
