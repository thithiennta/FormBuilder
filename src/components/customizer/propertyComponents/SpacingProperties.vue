<template>
  <a-collapse
    default-active-key="1"
    :bordered="false"
    expand-icon-position="right"
    class="property-wrapper"
  >
    <a-collapse-panel key="1" header="SPACING" class="customizer-container">
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
import Width from "./Spacing/Width";
import Height from "./Spacing/Height";
import SpacingAlign from "./Spacing/SpacingAlign";
import SpacingPadding from "./Spacing/SpacingPadding";
import ElementBackgroundColor from "./Spacing/ElementBackgroundColor";
import ColumnsWidth from "./Spacing/ColumnsWidth";
import SpacingMargin from "./Spacing/SpacingMargin";
import DayWidth from "./Spacing/DayWidth";
import MonthWidth from "./Spacing/MonthWidth";
import YearWidth from "./Spacing/YearWidth";
export default {
  components: {
    Width,
    Height,
    SpacingAlign,
    SpacingPadding,
    ElementBackgroundColor,
    ColumnsWidth,
    SpacingMargin,
    DayWidth,
    MonthWidth,
    YearWidth,
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
      return getElementsByType("spacing", this.activeElement.type);
    },
  },
};
</script>

<style scoped>
.customizer-container {
  margin-bottom: 10px !important;
}
</style>
