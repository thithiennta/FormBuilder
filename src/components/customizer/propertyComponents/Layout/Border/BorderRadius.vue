<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Border Radius</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="0"
        :max="50"
        v-model="value"
        class="customizer-input-number"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
const min = 0,
  max = 50;
export default {
  data() {
    return {
      value: null,
    };
  },
  created() {
    this.value = this.layoutSettings.border.radius;
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
    }, 300),
    layoutSettings() {
      this.value = this.layoutSettings.border.radius;
    },
  },
  methods: {
    handleChange() {
      if (this.value > max) {
        this.value = max;
      }
      if (this.value === "" || this.value === null || this.value < min) {
        this.value = min;
      }
      this.layoutSettings.border.radius = this.value;
    },
  },
};
</script>

<style></style>
