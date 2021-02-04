<template>
  <div class="body-wrapper">
    <vuescroll :ops="options" class="customizer-body-scroll">
      <ToolSection />
      <SpacingSection />
    </vuescroll>
  </div>
</template>

<script>
import ToolSection from "./ToolSection";
import SpacingSection from "./SpacingSection";
import vuescroll from "vuescroll";
export default {
  components: {
    ToolSection,
    SpacingSection,
    vuescroll,
  },
  data() {
    return {
      options: {
        rail: {
          size: "6px",
        },
        bar: {
          showDelay: 400,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#585959",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0,
          size: "4px",
          disable: false,
        },
      },
    };
  },
};
</script>

<style scoped>
.body-wrapper {
  height: 100%;
  overflow: hidden;
}
.customizer-body-scroll > .__panel {
  width: 100%;
}
</style>
<style>
.customizer-tools-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0 !important;
}
.customizer-tools-content {
  padding-top: 10px;
  border-top: 1px solid #343638;
}
.customizer-tool-wrapper {
  width: 50%;
  display: inline-block;
}
.ant-collapse-header {
  color: white !important;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.customizer-collapse-panel .ant-collapse-header {
  background-color: initial !important;
}
.customizer-collapse-panel {
  border-bottom: 0 !important;
  width: 100%;
}
</style>
