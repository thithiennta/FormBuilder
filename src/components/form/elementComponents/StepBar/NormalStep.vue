<template>
  <div class="step-wrapper">
    <div
      class="step-bar"
      v-for="(step, index) in layoutSettings.form.numberStep"
      :key="index"
      :style="{ width: 100 / layoutSettings.form.numberStep + '%' }"
    >
      <div
        class="step-bar-line"
        :style="{
          ...lineColor(index),
        }"
      >
        <div
          class="step-bar-number"
          :style="{
            ...numberColor(index),
            'font-weight': currentStep === index ? 'bold' : '',
          }"
        >
          {{ index + 1 }}
        </div>
      </div>
      <div
        class="step-title"
        :style="{
          'font-family': 'inherit',
          ...titleColor(index),
          'font-weight': currentStep === index ? 'bold' : '',
        }"
        v-if="properties.text.haveTitle"
      >
        {{ properties.text.titles[index] }}
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
    ...mapState("formModule", ["layoutSettings", "currentStep"]),
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    lineColor(index) {
      if (this.currentStep > index) {
        return {
          "background-color": this.properties.step.finishColor,
        };
      }
      if (this.currentStep === index) {
        return {
          "background-color": this.properties.step.processColor,
        };
      }
      return {
        "background-color": this.properties.step.waitColor,
      };
    },
    numberColor(index) {
      if (this.currentStep > index) {
        return {
          border: "1px solid " + this.properties.step.finishColor,
          color: this.properties.step.finishNumberColor,
          "background-color": "white",
        };
      }
      if (this.currentStep === index) {
        return {
          "background-color": this.properties.step.processColor,
          color: this.properties.step.processNumberColor,
        };
      }
      return {
        "background-color": this.properties.step.waitColor,
        color: this.properties.step.waitNumberColor,
      };
    },
    titleColor(index) {
      if (this.currentStep > index) {
        return {
          color: this.properties.step.finishTitleColor,
        };
      }
      if (this.currentStep === index) {
        return {
          color: this.properties.step.processTitleColor,
        };
      }
      return {
        color: this.properties.step.waitTitleColor,
      };
    },
  },
};
</script>

<style scoped>
.step-wrapper {
  display: flex;
  margin-top: 10px;
}
.step-bar-line {
  position: relative;
  width: 100%;
  height: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.step-bar-number {
  width: 35px;
  height: 35px;
  position: absolute;
  border-radius: 50px;
  left: 50%;
  top: -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  transform: translate(-50%, -35%);
}
.step-title {
  text-align: center;
}
</style>
