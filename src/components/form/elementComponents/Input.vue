<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color':
        properties.general.backgroundColor.indexOf('0)') !== -1
          ? layoutSettings.backgroundColor
          : properties.general.backgroundColor,
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
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    inputComponent() {
      if (!this.layoutSettings.input.isOutsideLabel) {
        return "VerticalInput";
      } else {
        if (
          this.layoutSettings.input.labelPosition === "top" ||
          this.layoutSettings.input.labelPosition === "bottom"
        )
          return "VerticalInput";
        return "HorizontalInput";
      }
    },
  },
};
</script>

<style scoped></style>
