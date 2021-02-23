<template>
  <div
    class="form-element-wrapper"
    :style="{
      'text-align': properties.spacing.align,
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
    <button
      :style="{
        'background-color': properties.spacing.backgroundColor,
        ...border,
        'border-radius': properties.border.radius + 'px',
        color: properties.text.inheritColor
          ? layoutSettings.color
          : properties.text.color,

        'font-weight': properties.text.weight,
        'text-align': properties.text.align,
        width: properties.spacing.width + '%',
        height: properties.spacing.height + 'px',
        ...padding,
        'font-family': properties.general.fontFamily,
        'font-style': properties.text.style,
        'text-decoration': properties.text.decoration,
      }"
    >
      {{ properties.text.value }}
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    border() {
      if (this.properties.border.fullWidth) {
        return {
          "border-style": this.properties.border.style,
          "border-color": this.properties.border.color,
          "border-top-width": this.properties.border.topWidth + "px ",
          "border-right-width": this.properties.border.rightWidth + "px ",
          "border-bottom-width": this.properties.border.bottomWidth + "px ",
          "border-left-width": this.properties.border.leftWidth + "px ",
        };
      } else {
        return {
          border:
            this.properties.border.allSidesWidth +
            "px " +
            this.properties.border.style +
            " " +
            this.properties.border.color,
        };
      }
    },
    padding() {
      if (this.properties.spacing.fullPadding) {
        return {
          padding:
            this.properties.spacing.topPadding +
            "px " +
            this.properties.spacing.rightPadding +
            "px " +
            this.properties.spacing.bottomPadding +
            "px " +
            this.properties.spacing.leftPadding +
            "px ",
        };
      } else {
        return {
          padding: this.properties.spacing.allSidesPadding + "px",
        };
      }
    },
  },
};
</script>

<style scoped>
button {
  pointer-events: none;
  outline: none;
  overflow-wrap: anywhere;
  min-width: min-content;
}
</style>
