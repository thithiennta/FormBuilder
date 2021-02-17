<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Size</div>
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
    this.value = this.layoutSettings.fontSize;
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
  },
  methods: {
    handleChange() {
      this.layoutSettings.fontSize = this.value > 100 ? 100 : this.value;
    },
  },
};
</script>

<style></style>
