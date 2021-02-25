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
    <div
      class="input-field-name"
      :style="{
        'font-size': layoutSettings.label.labelSize + 'px',
        'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
        'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
        'min-width': 'fit-content',
        color: layoutSettings.label.labelColor,
      }"
      v-if="layoutSettings.label.isOutsideLabel"
    >
      {{ properties.text.fieldName }}
    </div>
    <div class="date-picker-wrapper" style="display:flex">
      <div
        class="margin-left"
        :style="{ width: properties.option.leftMargin + '%' }"
      ></div>
      <input
        type="date"
        :name="properties.text.fieldName"
        :style="{
          width: properties.spacing.width + '%',
          'min-width': 'fit-content',
          ...padding,
          ...border,
          'border-radius': properties.layoutSettings.radius + 'px',
          color: properties.text.inheritColor
            ? layoutSettings.color
            : properties.text.color,
          'background-color': properties.spacing.backgroundColor,
        }"
      />
    </div>
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
    ...mapState("customizerModule", ["activeElement"]),
    border() {
      if (this.properties.layoutSettings.fullWidth) {
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
.form-element-wrapper input {
  margin-right: 0;
}
</style>
