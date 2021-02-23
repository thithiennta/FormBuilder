<template>
  <div
    class="form-element-wrapper"
    :style="{
      'font-size': properties.text.inheritSize
        ? layoutSettings.fontSize + 'px'
        : properties.text.size + 'px',
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
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    inputComponent() {
      if (!this.layoutSettings.input.isOutsideLabel) {
        return "VerticalTextArea";
      } else {
        if (
          this.layoutSettings.input.labelPosition === "top" ||
          this.layoutSettings.input.labelPosition === "bottom"
        )
          return "VerticalTextArea";
        return "HorizontalTextArea";
      }
    },
  },
};
</script>

<style scoped></style>
