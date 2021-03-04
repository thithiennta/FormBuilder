<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color': properties.general.backgroundColor,
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
    {{ rowId }}
    <div
      class="input-field-name"
      :style="{
        'font-size': layoutSettings.label.labelSize + 'px',
        'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
        'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
        'min-width': 'fit-content',
        color: layoutSettings.label.labelInheritColor
          ? layoutSettings.color
          : layoutSettings.label.labelColor,
        'margin-bottom': layoutSettings.label.labelBottomMargin + 'px',
      }"
      v-if="
        layoutSettings.label.isOutsideLabel &&
          layoutSettings.label.labelPosition === 'top'
      "
    >
      {{ properties.text.fieldName }}
      <span style="color: red" v-if="properties.general.isRequired">*</span>
    </div>
    <div
      class="date-picker-wrapper"
      :style="{
        display: 'flex',
        'align-items': layoutSettings.label.labelAlignCenter ? 'center' : '',
      }"
    >
      <div
        class="input-field-name"
        :style="{
          width: properties.general.label.inheritLabelMargin
            ? layoutSettings.label.labelWidth + 'px'
            : properties.general.label.labelRightMargin + 'px',
          'font-size': layoutSettings.label.labelSize + 'px',
          'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
          'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
          'min-width': 'fit-content',
          color: layoutSettings.label.labelInheritColor
            ? layoutSettings.color
            : layoutSettings.label.labelColor,
        }"
        v-if="
          layoutSettings.label.isOutsideLabel &&
            layoutSettings.label.labelPosition === 'left'
        "
      >
        {{ properties.text.fieldName }}
        <span style="color: red" v-if="properties.general.isRequired">*</span>
      </div>
      <input
        type="file"
        :id="rowId + '-file-upload'"
        :name="properties.text.fieldName"
        :style="{
          width: properties.spacing.width + '%',
          'min-width': 'fit-content',
          padding: layoutSettings.field.padding + 'px',
          ...border,
          ...maxWidth,
          'border-radius': layoutSettings.border.radius + 'px',
          color: layoutSettings.color,
          'background-color': layoutSettings.field.backgroundColor,
          height: layoutSettings.field.height + 'px',
          'font-family': 'inherit',
          'font-weight': layoutSettings.weight,
        }"
      />
      <label
        :for="rowId + '-file-upload'"
        :style="{
          border: '1px dashed ' + layoutSettings.border.color,
          width: properties.spacing.width + '%',
          'min-width': 'fit-content',
          color: layoutSettings.color,
          ...maxWidth,
          'background-color': layoutSettings.field.backgroundColor,
          'font-family': 'inherit',
          'font-weight': layoutSettings.weight,
          'text-align': 'center',
        }"
      >
        <i class="fas fa-cloud-upload-alt"></i>
        <p>Click here to upload.</p>
      </label>
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
    rowId: {
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
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
        this.layoutSettings.label.isOutsideLabel
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
.form-element-wrapper {
  user-select: none;
}
input {
  display: none;
}
label {
  cursor: pointer;
  padding: 20px;
  display: inline-block;
  user-select: none;
  pointer-events: none;
}
label i {
  margin-bottom: 20px;
}
</style>
