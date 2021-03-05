<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Status Settings</div>
    <div class="property-adjust-wrapper">
      <a-radio-group v-model="value" button-style="solid">
        <a-radio-button value="finish">
          Finish
        </a-radio-button>
        <a-radio-button value="process">
          Process
        </a-radio-button>
        <a-radio-button value="wait">
          Wait
        </a-radio-button>
      </a-radio-group>
      <StepColor :type="value" />
      <StepNumberColor :type="value" />
      <StepTitleColor :type="value" />
    </div>
  </div>
</template>

<script>
import StepColor from "./StatusSettings/StepColor";
import StepNumberColor from "./StatusSettings/StepNumberColor";
import StepTitleColor from "./StatusSettings/StepTitleColor";
export default {
  data() {
    return {
      value: "finish",
    };
  },
  computed: {},
  components: {
    StepColor,
    StepNumberColor,
    StepTitleColor,
  },
  methods: {},
};
</script>

<style></style>
