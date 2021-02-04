<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Height</div>
    <div class="property-adjust-wrapper">
      <div class="slider-tool-tip">
        {{ activeElement.properties.spacing.height }}px
      </div>
      <a-slider
        v-model="activeElement.properties.spacing.height"
        :tooltip-visible="false"
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
