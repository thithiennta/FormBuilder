<template>
  <div class="property-wrapper">
    <!-- <div class="customizer-sub-title">Label</div>
    <div class="property-adjust-wrapper">
      <a-radio-group v-model="isOutsideLabel" button-style="solid">
        <a-radio-button :value="true">
          Outside
        </a-radio-button>
        <a-radio-button :value="false">
          Inside
        </a-radio-button>
      </a-radio-group>
    </div> -->
    <div style="margin-top: 10px">
      <div class="customizer-sub-title">Label Position</div>
      <div class="property-adjust-wrapper">
        <a-radio-group v-model="labelPosition" button-style="solid">
          <a-radio-button value="top">
            Top
          </a-radio-button>
          <a-radio-button value="left">
            Left
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
      // isOutsideLabel: null,
      labelPosition: null,
    };
  },
  created() {
    // this.isOutsideLabel = this.layoutSettings.label.isOutsideLabel;
    this.labelPosition = this.layoutSettings.label.labelPosition;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    // isOutsideLabel(newValue, oldValue) {
    //   if (oldValue === null) return;
    //   this.layoutSettings.label.isOutsideLabel = newValue;
    //   this.$store.dispatch("formModule/updateProperty");
    //   this.$store.dispatch(
    //     "formModule/changeLayoutProperty",
    //     this.layoutSettings
    //   );
    // },
    labelPosition(newValue, oldValue) {
      if (oldValue === null) return;
      this.layoutSettings.label.labelPosition = newValue;
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
    layoutSettings() {
      // this.isOutsideLabel = this.layoutSettings.label.isOutsideLabel;
      this.labelPosition = this.layoutSettings.label.labelPosition;
    },
  },
};
</script>

<style scoped></style>
