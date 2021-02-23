<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Box Size</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="5"
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
const min = 5,
  max = 50;
export default {
  data() {
    return {
      value: null,
    };
  },
  created() {
    this.value = this.activeElement.properties.box.size;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
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
      this.value = this.activeElement.properties.box.size;
    },
  },
  methods: {
    handleChange() {
      if (this.value > max) this.value = max;
      if (this.value === null || this.value === "" || this.value < min)
        this.value = min;
      this.activeElement.properties.box.size = this.value;
    },
  },
};
</script>

<style></style>
