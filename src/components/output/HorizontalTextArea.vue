<template>
  <div>
    <div
      :style="{
        width: '100%',
        ...flexDirection,
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
      <textarea
        :style="{
          'background-color': layoutSettings.field.backgroundColor,
          ...border,
          'border-radius': layoutSettings.border.radius + 'px',
          color: layoutSettings.color,
          ...maxWidth,
          width: properties.spacing.width + '%',
          height: properties.spacing.height + 'px',
          'min-height': '50px',
          padding: layoutSettings.field.padding + 'px',
          'font-weight': layoutSettings.weight,
          'font-family': properties.general.fontFamily,
          'font-size': layoutSettings.fontSize + 'px',
        }"
        :placeholder="properties.text.placeholder"
        :name="properties.text.name"
        v-model="value"
        ref="textarea"
      ></textarea>
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
        v-if="showError"
        :text="errorText"
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
  components: {
    ValidateError,
  },
  data() {
    return {
      value: null,
      showError: null,
      errorText: "Please enter this field",
    };
  },
  watch: {
    value(newValue, oldValue) {
      if (oldValue === null) {
        this.$store.dispatch("formModule/removeUnvalidate");
        this.showError = false;
      } else {
        if (oldValue === "") {
          this.$store.dispatch("formModule/removeUnvalidate");
          this.showError = false;
        }
        if (oldValue !== "" && newValue === "") {
          this.$store.dispatch("formModule/addUnvalidate");
          this.showError = true;
        }
      }
    },
    showError() {},
    isSubmitYet(newValue) {
      if (
        this.properties.general.isRequired &&
        this.properties.general.stepPage === this.previewCurrentStep + 1
      ) {
        if (this.showError === null || this.showError === true) {
          this.$refs.textarea.focus();
          this.showError = true;
        }
        if (newValue === null) this.showError = null;
      }
    },
    previewCurrentStep(newValue, oldValue) {
      if (newValue > oldValue) {
        if (
          (this.value === "" || this.value === null) &&
          this.properties.general.stepPage === this.previewCurrentStep + 1 &&
          this.properties.general.isRequired
        )
          this.$store.dispatch("formModule/addUnvalidate");
      }
    },
  },
  methods: {
    validate(value) {
      return this.checkIsEmpty(value);
    },
    checkIsEmpty(value) {
      if (value === "") return true;
      return false;
    },
  },
  computed: {
    ...mapState("formModule", [
      "layoutSettings",
      "previewUnvalidate",
      "isSubmitYet",
      "previewCurrentStep",
    ]),
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
textarea {
  transition: border-color 0.4s ease-in-out;
}
textarea:focus {
  border-color: #343a40 !important;
}
</style>
