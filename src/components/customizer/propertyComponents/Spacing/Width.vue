<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Width</div>
    <div class="property-adjust-wrapper">
      <div class="slider-tool-tip">{{ value }}%</div>
      <a-slider
        v-model="value"
        :tooltip-visible="false"
        :default-value="activeElement.properties.spacing.width"
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
    this.value = this.activeElement.properties.spacing.width;
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 200),
    activeElement() {
      this.value = this.activeElement.properties.spacing.width;
    },
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange() {
      this.activeElement.properties.spacing.width = this.value;
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
