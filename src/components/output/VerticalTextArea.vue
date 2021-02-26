<template>
  <div
    :style="{
      ['margin' + spacingAlign]: 'auto',
      ...flexDirection,
    }"
  >
    <div
      class="input-field-name"
      :style="{
        ...labelPosition,
        'font-size': layoutSettings.label.labelSize + 'px',
        'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
        'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
        'min-width': 'fit-content',
        ...margin,
        color: layoutSettings.label.labelColor,
        'margin-bottom': layoutSettings.label.labelBottomMargin + 'px',
      }"
      v-if="layoutSettings.label.isOutsideLabel"
    >
      {{ properties.text.fieldName }}
    </div>
    <textarea
      :style="{
        'background-color': layoutSettings.field.backgroundColor,
        ...border,
        'border-radius': properties.border.radius + 'px',
        color: properties.text.inheritColor
          ? layoutSettings.color
          : properties.text.color,

        width: properties.spacing.width + '%',
        height: properties.spacing.height + 'px',
        'min-height': '50px',
        padding: layoutSettings.field.padding + 'px',
        'text-align': properties.text.align,
        'font-weight': layoutSettings.weight,
        'font-family': properties.general.fontFamily,
      }"
      :placeholder="properties.text.placeholder"
      :name="properties.text.name"
    ></textarea>
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
    spacingAlign() {
      if (this.properties.spacing.align === "left") return "-right";
      if (this.properties.spacing.align === "right") return "-left";
      return "";
    },
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
    labelPosition() {
      var position = {};
      if (
        this.layoutSettings.label.labelPosition === "bottom" ||
        this.layoutSettings.label.labelPosition === "right"
      ) {
        position = { order: 1 };
      }
      return position;
    },
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
            this.layoutSettings.label.labelTopMargin +
            "px " +
            this.layoutSettings.label.labelRightMargin +
            "px " +
            this.layoutSettings.label.labelBottomMargin +
            "px " +
            this.layoutSettings.label.labelLeftMargin +
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
