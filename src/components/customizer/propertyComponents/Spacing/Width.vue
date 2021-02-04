<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Width</div>
    <div class="property-adjust-wrapper">
      <div class="slider-tool-tip">
        {{ activeElement.properties.spacing.width }}%
      </div>
      <a-slider
        v-model="activeElement.properties.spacing.width"
        :tooltip-visible="false"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange() {
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
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
