<template>
  <div
    class="form-element-wrapper"
    :style="{
      'font-size': properties.text.inheritSize
        ? layoutSettings.fontSize + 'px'
        : properties.text.size + 'px',
      'background-color':
        properties.general.backgroundColor.indexOf('0)') !== -1
          ? layoutSettings.backgroundColor
          : properties.general.backgroundColor,
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
import HorizontalTextArea from "./HorizontalTextArea";
import VerticalTextArea from "./VerticalTextArea";
export default {
  components: {
    HorizontalTextArea,
    VerticalTextArea,
  },
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  created() {
    if (
      this.properties.general.stepPage === this.previewCurrentStep + 1 &&
      this.properties.general.isRequired
    )
      this.$store.dispatch("formModule/addUnvalidate");
  },
  computed: {
    ...mapState("formModule", ["layoutSettings", "previewCurrentStep"]),
    inputComponent() {
      if (!this.layoutSettings.label.isOutsideLabel) {
        return "VerticalTextArea";
      } else {
        if (
          this.layoutSettings.label.labelPosition === "top" ||
          this.layoutSettings.label.labelPosition === "bottom"
        )
          return "VerticalTextArea";
        return "HorizontalTextArea";
      }
    },
  },
};
</script>
