<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Field Height</div>
    <div class="property-adjust-wrapper">
      <div class="slider-tool-tip">{{ value }}px</div>
      <a-slider
        v-model="value"
        :tooltip-visible="false"
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
    this.value = this.layoutSettings.field.height;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      this.$store.dispatch("formModule/updateProperty");
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    }, 200),
    layoutSettings() {
      this.value = this.layoutSettings.field.height;
    },
  },
  methods: {
    handleChange() {
      this.layoutSettings.field.height = this.value;
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
