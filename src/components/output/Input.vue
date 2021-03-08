<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color': properties.general.backgroundColor,
      margin:
        properties.spacing.topMargin +
        'px ' +
        properties.spacing.rightMargin +
        'px ' +
        properties.spacing.bottomMargin +
        'px ' +
        properties.spacing.leftMargin +
        'px ',
    }"
  >
    <component :is="inputComponent" :properties="properties"></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HorizontalInput from "./HorizontalInput";
import VerticalInput from "./VerticalInput";
export default {
  components: {
    HorizontalInput,
    VerticalInput,
  },
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  created() {
    if (
      (this.properties.text.value === undefined ||
        this.properties.text.value === "") &&
      this.properties.general.stepPage === this.previewCurrentStep + 1
    )
      this.$store.dispatch("formModule/addUnvalidate");
  },
  watch: {
    previewCurrentStep() {
      if (
        (this.properties.text.value === undefined ||
          this.properties.text.value === "") &&
        this.properties.general.stepPage === this.previewCurrentStep + 1
      )
        this.$store.dispatch("formModule/addUnvalidate");
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings", "previewCurrentStep"]),
    inputComponent() {
      if (!this.layoutSettings.label.isOutsideLabel) {
        return "VerticalInput";
      } else {
        if (
          this.layoutSettings.label.labelPosition === "top" ||
          this.layoutSettings.label.labelPosition === "bottom"
        )
          return "VerticalInput";
        return "HorizontalInput";
      }
    },
  },
};
</script>
