<template>
  <div
    class="property-wrapper"
    v-if="layoutSettings.form.type === 'multi step'"
  >
    <div class="customizer-sub-title">Number Step</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="2"
        :max="5"
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
const min = 2,
  max = 5;
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
    this.value = this.layoutSettings.form.numberStep;
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
      this.value = this.layoutSettings.form.numberStep;
    },
  },
  methods: {
    handleChange() {
      if (this.value > max) {
        this.value = max;
      } else if (this.value === null || this.value === "" || this.value < min) {
        this.value = min;
      }
      this.layoutSettings.form.numberStep = this.value;
    },
  },
};
</script>
