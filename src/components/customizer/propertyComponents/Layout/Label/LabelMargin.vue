<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Label Margin Bottom
    </div>
    <div class="property-adjust-wrapper">
      <div class="property-adjust-wrapper">
        <a-input-number
          :min="0"
          :max="100"
          v-model="layoutSettings.label.labelBottomMargin"
          class="customizer-input-number"
          @change="handleChange($event, 'Bottom')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
const min = 0,
  max = 100;
export default {
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    top() {
      return this.layoutSettings.label.labelBottomMargin;
    },
  },
  watch: {
    top(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
  },
  methods: {
    handleChange(value, position) {
      if (value > max) {
        this.layoutSettings.label["label" + position + "Margin"] = max;
      } else if (value === null || value === "" || value < min) {
        this.layoutSettings.label["label" + position + "Margin"] = min;
      } else {
        this.layoutSettings.label["label" + position + "Margin"] = value;
      }
    },
    debounceFunction: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    }, 300),
  },
};
</script>
<style scoped></style>
