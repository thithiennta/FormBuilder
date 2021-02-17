<template>
  <div class="customizer-side-wrapper">
    <HeaderSection v-if="customizerActive" />
    <BodySection v-if="!haveActiveElement && isElementTabActive" />
    <AdjustPropertiesSection v-if="haveActiveElement && isElementTabActive" />
    <AdjustLayoutSection v-if="!isElementTabActive" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderSection from "./HeaderSection";
import BodySection from "./BodySection";
import AdjustPropertiesSection from "./AdjustPropertiesSection";
import AdjustLayoutSection from "./AdjustLayoutSection";

export default {
  components: {
    HeaderSection,
    BodySection,
    AdjustPropertiesSection,
    AdjustLayoutSection,
  },
  data() {
    return {
      customizerActive: true,
    };
  },
  computed: {
    ...mapState("customizerModule", [
      "haveActiveElement",
      "activeElement",
      "isElementTabActive",
    ]),
  },
};
</script>

<style scoped>
.customizer-side-wrapper {
  background-color: #222527;
  height: 100vh;
  width: 300px;
  /* position: fixed;
  top: 0;
  left: 0; */
  display: flex;
  flex-direction: column;
}
</style>

<style>
.customizer-container {
  width: 90% !important;
  margin: auto !important;
}
.adjust-section-wrapper .customizer-container {
  width: 100% !important;
}
.customizer-tools-wrapper {
  background-color: #2d3032 !important;
  margin-top: 10px !important;
  border-radius: 7px;
  padding: 10px 0;
}
.customizer-section-header {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.customizer-title {
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
}
.customizer-section-header > i {
  color: rgb(188, 187, 187);
  font-size: 11px;
}
.setting-element-wrapper {
  margin: 20px 0;
}
</style>
