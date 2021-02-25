<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Label At Center</div>
    <div class="property-adjust-wrapper">
      <a-radio-group v-model="labelAlignCenter" button-style="solid">
        <a-radio-button :value="true">
          Yes
        </a-radio-button>
        <a-radio-button :value="false">
          No
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
      labelAlignCenter: null,
    };
  },
  created() {
    this.labelAlignCenter = this.layoutSettings.label.labelAlignCenter;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    labelAlignCenter(newValue, oldValue) {
      if (oldValue === null) return;
      this.layoutSettings.label.labelAlignCenter = newValue;
      this.$store.dispatch("formModule/updateProperty");
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
  },
};
</script>

<style></style>
