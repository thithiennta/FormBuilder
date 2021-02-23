<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Label Size</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="1"
        :max="100"
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
const min = 1,
  max = 100;
export default {
  data() {
    return {
      value: null,
    };
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  created() {
    this.value = this.layoutSettings.input.labelSize;
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
    }, 300),
    layoutSettings() {
      this.value = this.layoutSettings.input.labelSize;
    },
  },
  methods: {
    handleChange() {
      if (this.value > max) this.value = max;
      if (this.value === null || this.value === "" || this.value < min)
        this.value = min;
      this.layoutSettings.input.labelSize = this.value;
    },
  },
};
</script>

<style></style>
