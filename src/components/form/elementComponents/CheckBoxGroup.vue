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
      class="option-container"
      style="display:flex"
      :style="{
        'margin-left':
          layoutSettings.label.labelPosition === 'top'
            ? properties.option.leftMargin + 'px'
            : '',
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
      <div
        class="options-wrapper"
        :style="{
          ...flexDirection,
          'flex-wrap': 'wrap',
          flex: 1,
        }"
      >
        <label
          v-for="(option, index) in properties.option.options"
          :key="index"
          :style="
            properties.option.optionsDirection === 'horizontal'
              ? {
                  'min-width': 'fit-content',
                  'margin-right': properties.option.optionSpacing + 'px',
                }
              : {
                  'min-width': 'fit-content',
                  'margin-bottom':
                    index === properties.option.options.length - 1
                      ? ''
                      : properties.option.optionSpacing + 'px',
                }
          "
          style="display:flex; align-items:center"
        >
          <input
            type="checkbox"
            :name="properties.text.name"
            :style="{
              width: properties.box.size + 'px',
              height: properties.box.size + 'px',
            }"
            :value="option"
          />
          <span
            :style="{
              color: layoutSettings.color,
              'font-size': layoutSettings.fontSize + 'px',
              'font-weight': layoutSettings.weight,
              'font-family': properties.general.fontFamily,
            }"
            >{{ option }}</span
          >
        </label>
      </div>
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
    flexDirection() {
      if (this.properties.option.optionsDirection === "vertical") {
        return {
          display: "flex",
          "flex-direction": "column",
          "align-items": "flex-start",
        };
      }
      return {
        display: "flex",
      };
    },
  },
};
</script>

<style scoped>
.options-wrapper {
  pointer-events: none;
}
.form-element-wrapper {
  user-select: none;
}
.form-element-wrapper input {
  margin-right: 5px;
}
</style>
