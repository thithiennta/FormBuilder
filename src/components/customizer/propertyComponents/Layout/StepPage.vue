<template>
  <div
    class="property-wrapper"
    v-if="layoutSettings.form.type === 'multi step'"
  >
    <div class="customizer-sub-title">Step Page</div>
    <div class="property-adjust-wrapper">
      <a-radio-group
        v-model="index"
        button-style="solid"
        @change="handleRadioChange"
      >
        <a-radio-button
          :value="i"
          v-for="(step, i) in layoutSettings.form.numberStep"
          :key="i"
        >
          {{ i + 1 }}
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: null,
      value: null,
    };
  },
  created() {
    this.index = this.currentStep;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings", "currentStep"]),
  },
  watch: {
    index(newValue, oldValue) {
      if (oldValue === null) return;
      this.$store.dispatch("formModule/changeCurrentStep", this.index);
    },
    layoutSettings() {
      this.index = this.currentStep;
    },
  },
  methods: {
    handleRadioChange() {},
  },
};
</script>

<style></style>
