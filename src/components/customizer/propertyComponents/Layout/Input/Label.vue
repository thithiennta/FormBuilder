<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Label</div>
    <div class="property-adjust-wrapper">
      <a-radio-group v-model="isOutsideLabel" button-style="solid">
        <a-radio-button :value="true">
          Outside
        </a-radio-button>
        <a-radio-button :value="false">
          Inside
        </a-radio-button>
      </a-radio-group>
    </div>
    <div v-if="isOutsideLabel" style="margin-top: 10px">
      <div class="customizer-sub-title">Position</div>
      <div class="property-adjust-wrapper">
        <a-radio-group v-model="labelPosition" button-style="solid">
          <a-radio-button value="top">
            Top
          </a-radio-button>
          <a-radio-button value="left">
            Left
          </a-radio-button>
          <a-radio-button value="bottom">
            Bottom
          </a-radio-button>
        </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isOutsideLabel: null,
      labelPosition: null,
    };
  },
  created() {
    this.isOutsideLabel = this.layoutSettings.input.isOutsideLabel;
    this.labelPosition = this.layoutSettings.input.labelPosition;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    isOutsideLabel(newValue, oldValue) {
      if (oldValue === null) return;
      this.layoutSettings.input.isOutsideLabel = newValue;
      this.$store.dispatch("formModule/updateProperty");
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
    labelPosition(newValue, oldValue) {
      if (oldValue === null) return;
      this.layoutSettings.input.labelPosition = newValue;
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
  },
};
</script>

<style scoped></style>
