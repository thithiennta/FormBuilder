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
        padding: layoutSettings.field.padding + 'px',
      }"
      :placeholder="properties.text.placeholder"
      :name="properties.text.name"
      :type="properties.general.type"
      v-model="value"
      ref="input"
    />
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
        if (this.validate(newValue)) {
          this.$store.dispatch("formModule/addUnvalidate");
          this.showError = true;
        }
      } else {
        if (oldValue === "") {
          if (this.validate(newValue)) {
            if (this.properties.general.type === "email") this.showError = true;
          } else {
            this.$store.dispatch("formModule/removeUnvalidate");
            this.showError = false;
          }
        }
        if (oldValue !== "" && newValue === "") {
          if (this.properties.general.type === "email") {
            this.$store.dispatch("formModule/removeUnvalidate");
            this.errorText = "Please enter this field";
          }
          this.$store.dispatch("formModule/addUnvalidate");
          this.showError = true;
        }
        if (oldValue !== "" && newValue !== "") {
          if (this.validate(newValue)) {
            this.errorText = "Please enter a valid email address";
            if (this.showError !== true)
              this.$store.dispatch("formModule/addUnvalidate");
            this.showError = true;
          } else {
            if (this.showError === true)
              this.$store.dispatch("formModule/removeUnvalidate");
            this.showError = false;
          }
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
          this.$refs.input.focus();
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
  methods: {
    validate(value) {
      if (this.properties.general.type === "text") {
        return this.checkIsEmpty(value);
      }
      if (this.properties.general.type === "email") {
        if (!this.checkIsEmail(value))
          this.errorText = "Please enter a valid email address";
        if (this.checkIsEmpty(value))
          this.errorText = "Please enter this field";
        return this.checkIsEmpty(value) || !this.checkIsEmail(value);
      }
    },
    checkIsEmpty(value) {
      if (value === "") return true;
      return false;
    },
    checkIsEmail(value) {
      let regex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      let result = value.match(regex);
      if (result === null) return false;
      return true;
    },
  },
};
</script>
<style scoped>
input {
  transition: border-color 0.4s ease-in-out;
}
input:focus {
  border-color: #343a40 !important;
}
</style>
