<template>
  <div
    class="form-element-wrapper"
    :style="{
      'text-align': properties.spacing.align,
      'background-color': properties.general.backgroundColor,
    }"
  >
    <button
      :style="{
        'background-color': properties.spacing.backgroundColor,
        ...border,
        'border-radius': properties.border.radius + 'px',
        color: properties.text.color,
        'font-size': properties.text.size + 'px',
        'font-weight': properties.text.weight,
        'text-align': properties.text.align,
        width: properties.spacing.width + '%',
        height: properties.spacing.height + 'px',
        ...padding,
        'font-family': properties.general.fontFamily,
      }"
    >
      {{ properties.text.value }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  computed: {
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
