<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color': properties.general.backgroundColor,
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
import HorizontalInput from "./HorizontalInput";
import VerticalInput from "./VerticalInput";
import { mapState } from "vuex";
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
