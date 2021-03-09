<template>
  <div>
    <div
      :style="{
        width: '100%',
        ...flexDirection,
        'align-items': layoutSettings.label.labelAlignCenter ? 'center' : '',
      }"
    >
      <div
        class="input-field-name"
        :style="{
          'font-size': layoutSettings.label.labelSize + 'px',
          'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
          'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
          width: properties.general.label.inheritLabelMargin
            ? layoutSettings.label.labelWidth + 'px'
            : properties.general.label.labelRightMargin + 'px',
          'min-width': 'fit-content',
          color: layoutSettings.label.labelInheritColor
            ? layoutSettings.color
            : layoutSettings.label.labelColor,
        }"
        v-if="properties.general.label.isOutsideLabel"
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
          padding: layoutSettings.field.padding + 'px',
          width: properties.spacing.width + '%',
          ...maxWidth,
          'font-weight': layoutSettings.weight,
          'font-family': properties.general.fontFamily,
          'font-size': layoutSettings.fontSize + 'px',
        }"
        :placeholder="properties.text.placeholder"
        :name="properties.text.name"
        :value="value"
        :type="properties.general.type"
      />
    </div>
    <div
      :style="{
        width: '100%',
        ...flexDirection,
        'align-items': layoutSettings.label.labelAlignCenter ? 'center' : '',
      }"
    >
      <div
        :style="{
          width: properties.general.label.inheritLabelMargin
            ? layoutSettings.label.labelWidth + 'px'
            : properties.general.label.labelRightMargin + 'px',
          'min-width': 'fit-content',
        }"
        v-if="properties.general.label.isOutsideLabel"
      ></div>
      <ValidateError
        :style="{
          width: properties.spacing.width + '%',
          ...maxWidth,
          'margin-top': '10px',
        }"
        v-if="false"
      />
    </div>
  </div>
</template>

<script>
import ValidateError from "./ValidateError";
import { mapState } from "vuex";

export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  components: {
    ValidateError,
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
    maxWidth() {
      if (
        this.layoutSettings.label.labelPosition === "left" &&
        this.properties.general.label.isOutsideLabel
      ) {
        return {
          "max-width":
            "calc(" +
            100 +
            "% - " +
            (this.properties.general.label.inheritLabelMargin
              ? this.layoutSettings.label.labelWidth
              : this.properties.general.label.labelRightMargin) +
            "px)",
        };
      }
      return {};
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
