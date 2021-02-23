<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Divider Size</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="1"
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
const min = 1,
  max = 25;
export default {
  data() {
    return {
      value: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.value = this.activeElement.properties.general.size;
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 300),
    activeElement() {
      this.value = this.activeElement.properties.general.size;
    },
  },
  methods: {
    handleChange() {
      if (this.value > max) this.value = max;
      if (this.value === null || this.value === "" || this.value < min)
        this.value = min;
      this.activeElement.properties.general.size = this.value;
    },
  },
};
</script>

<style></style>
