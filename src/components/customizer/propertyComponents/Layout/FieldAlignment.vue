<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Field Alignment Left</div>
    <div class="property-adjust-wrapper">
      <div class="slider-tool-tip">{{ value }}%</div>
      <a-slider
        v-model="value"
        :tooltip-visible="false"
        :default-value="layoutSettings.label.labelWidth"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: null,
    };
  },
  created() {
    this.value = this.layoutSettings.label.labelWidth;
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    }, 200),
    layoutSettings() {
      this.value = this.layoutSettings.label.labelWidth;
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  methods: {
    handleChange() {
      this.layoutSettings.label.labelWidth = this.value;
    },
  },
};
</script>

<style scoped>
.property-adjust-wrapper {
  position: relative;
}
.slider-tool-tip {
  color: grey;
  position: absolute;
  right: 0;
  top: -25px;
}
</style>
