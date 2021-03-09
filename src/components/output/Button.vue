<template>
  <div
    class="form-element-wrapper"
    :style="{
      'text-align': properties.spacing.align,
      'background-color': properties.general.backgroundColor,
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
    <button
      :type="properties.general.purpose === 'submit' ? 'submit' : ''"
      :style="{
        'background-color': properties.spacing.backgroundColor,
        ...border,
        'border-radius': properties.border.radius + 'px',
        color: properties.text.inheritColor
          ? layoutSettings.color
          : properties.text.color,
        'font-weight': layoutSettings.weight,
        'text-align': 'center',
        width: properties.spacing.width + '%',
        height: properties.spacing.height + 'px',
        'font-family': properties.general.fontFamily,
      }"
      @click="handleClick"
    >
      {{ properties.text.value }}
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { message } from "ant-design-vue";
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapState("formModule", [
      "layoutSettings",
      "previewCurrentStep",
      "previewUnvalidate",
      "isSubmitYet",
    ]),
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
  },
  methods: {
    handleClick(e) {
      if (this.properties.general.purpose === "previous step") {
        e.preventDefault();
        this.$store.dispatch("formModule/goPreviousStep");
      }
      if (this.previewUnvalidate.length !== 0) {
        e.preventDefault();
        console.log("Not validate");
        this.$store.dispatch("formModule/checkValidate");
        return false;
      }
      if (this.properties.general.purpose === "next step") {
        e.preventDefault();
        this.$store.dispatch("formModule/goNextStep");
      }
      if (this.properties.general.purpose === "submit") {
        e.preventDefault();
        this.$store.dispatch("formModule/goSubmit");
        message.loading({ content: "Sending...", key: "updatable" });
        setTimeout(() => {
          message.success({
            content: "Send completely",
            key: "updatable",
            duration: 2,
          });
        }, 1000);
      }
    },
  },
};
</script>
