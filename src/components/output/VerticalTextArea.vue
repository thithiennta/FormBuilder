<template>
  <div
    :style="{
      ...flexDirection,
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
      v-if="layoutSettings.label.isOutsideLabel"
    >
      {{ properties.text.fieldName
      }}<span style="color: red" v-if="properties.general.isRequired">*</span>
    </div>
    <textarea
      :style="{
        'background-color': layoutSettings.field.backgroundColor,
        ...border,
        'border-radius': layoutSettings.border.radius + 'px',
        color: layoutSettings.color,
        width: properties.spacing.width + '%',
        height: properties.spacing.height + 'px',
        'min-height': '50px',
        'font-weight': layoutSettings.weight,
        'font-family': properties.general.fontFamily,
        'font-size': layoutSettings.fontSize + 'px',
        padding: layoutSettings.field.padding + 'px',
      }"
      :placeholder="properties.text.placeholder"
      :name="properties.text.name"
      v-model="value"
      ref="textarea"
    ></textarea>
    <ValidateError
      :style="{
        width: properties.spacing.width + '%',
        'margin-top': '10px',
      }"
      v-if="showError"
      :text="errorText"
    />
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
