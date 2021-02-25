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
        'font-size': layoutSettings.input.labelSize + 'px',
        'font-weight': layoutSettings.input.labelBold ? 'bold' : '',
        'font-style': layoutSettings.input.labelItalic ? 'italic' : '',
        'min-width': 'fit-content',
        ...margin,
        color: layoutSettings.input.labelColor,
      }"
      v-if="layoutSettings.input.isOutsideLabel"
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
          'border-radius': properties.border.radius + 'px',
          color: properties.text.inheritColor
            ? layoutSettings.color
            : properties.text.color,
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
    margin() {
      if (this.properties.general.label.inheritLabelMargin) {
        return {
          margin:
            this.layoutSettings.input.labelTopMargin +
            "px " +
            this.layoutSettings.input.labelRightMargin +
            "px " +
            this.layoutSettings.input.labelBottomMargin +
            "px " +
            this.layoutSettings.input.labelLeftMargin +
            "px ",
        };
      }
      return {
        margin:
          this.properties.general.label.labelTopMargin +
          "px " +
          this.properties.general.label.labelRightMargin +
          "px " +
          this.properties.general.label.labelBottomMargin +
          "px " +
          this.properties.general.label.labelLeftMargin +
          "px ",
      };
    },
  },
};
</script>

<style scoped>
.form-element-wrapper input {
  margin-right: 0;
}
</style>
