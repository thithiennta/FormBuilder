<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Form Border Width
    </div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="0"
        :max="25"
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
  max = 25;
export default {
  data() {
    return {
      value: null,
    };
  },
  created() {
    this.value = this.layoutSettings.layoutStyles.borderWidth;
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
    layoutSettings() {},
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  methods: {
    handleChange() {
      if (this.value === null || this.value === "" || this.value < min)
        this.value = min;
      if (this.value > max) this.value = max;
      this.layoutSettings.layoutStyles.borderWidth = this.value;
    },
  },
};
</script>
