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
    <div class="option-container" style="display:flex">
      <div
        class="margin-left"
        :style="{ width: properties.option.leftMargin + '%' }"
      ></div>
      <div
        class="options-wrapper"
        :style="{
          ...flexDirection,
          'min-width': 'fit-content',
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
                  'margin-left': properties.option.optionSpacing / 2 + '%',
                  'margin-right': properties.option.optionSpacing / 2 + '%',
                }
              : {
                  'min-width': 'fit-content',
                  'margin-bottom':
                    index === properties.option.options.length - 1
                      ? ''
                      : properties.option.optionSpacing + 'px',
                }
          "
        >
          <input
            type="radio"
            :name="properties.text.name"
            :style="{
              width: properties.box.size + 'px',
              height: properties.box.size + 'px',
            }"
            :value="option"
          />
          <span
            :style="{
              color: properties.text.inheritColor
                ? layoutSettings.color
                : properties.text.color,
              'font-size': properties.text.inheritSize
                ? layoutSettings.fontSize + 'px'
                : properties.text.size + 'px',
              'font-weight': properties.text.weight,
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
</style>
