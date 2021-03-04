<template>
  <div
    :style="{
      width: properties.spacing.width + '%',
      ...flexDirection,
    }"
  >
    <div
      class="input-field-name"
      :style="{
        'font-size': layoutSettings.label.labelSize + 'px',
        'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
        'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
        width: layoutSettings.label.labelWidth + '%',
        'min-width': 'fit-content',
        color: layoutSettings.label.labelInheritColor
          ? layoutSettings.color
          : layoutSettings.label.labelColor,
        'margin-bottom': layoutSettings.label.labelBottomMargin + 'px',
      }"
      v-if="layoutSettings.label.isOutsideLabel"
    >
      {{ properties.text.fieldName }}
      <span style="color: red" v-if="properties.general.isRequired">*</span>
    </div>
    <input
      :style="{
        'background-color': layoutSettings.field.backgroundColor,
        ...border,
        'border-radius': layoutSettings.border.radius + 'px',
        color: layoutSettings.color,
        height: layoutSettings.field.height + 'px',
        width: '100%',
        'font-weight': layoutSettings.weight,
        'font-family': properties.general.fontFamily,
      }"
      :placeholder="properties.text.placeholder"
      :name="properties.text.name"
      :type="properties.general.type"
      :required="properties.general.isRequired"
    />
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
    flexDirection() {
      var flex = {
        display: "flex",
      };
      if (
        this.layoutSettings.label.labelPosition === "top" ||
        this.layoutSettings.label.labelPosition === "bottom"
      ) {
        flex = { ...flex, "flex-direction": "column" };
      }
      return flex;
    },
    border() {
      if (this.layoutSettings.border.fullWidth) {
        return {
          "border-style": this.layoutSettings.border.style,
          "border-color": this.layoutSettings.border.color,
          "border-top-width": this.layoutSettings.border.topWidth + "px ",
          "border-right-width": this.layoutSettings.border.rightWidth + "px ",
          "border-bottom-width": this.layoutSettings.border.bottomWidth + "px ",
          "border-left-width": this.layoutSettings.border.leftWidth + "px ",
        };
      } else {
        return {
          border:
            this.layoutSettings.border.allSidesWidth +
            "px " +
            this.layoutSettings.border.style +
            " " +
            this.layoutSettings.border.color,
        };
      }
    },
  },
};
</script>

<style scoped>
input {
  outline: none;
  min-width: min-content;
  pointer-events: none;
}
</style>
