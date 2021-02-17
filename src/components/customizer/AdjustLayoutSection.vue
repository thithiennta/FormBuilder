<template>
  <div class="adjust-section-wrapper">
    <vuescroll :ops="options" class="customizer-body-scroll">
      <div class="property-wrapper">
        <div class="layout-customizer-container">
          <BackgroundColor />
          <FontFamily />
          <FontSize />
          <TextColor />
        </div>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import BackgroundColor from "./propertyComponents/Layout/BackgroundColor";
import FontFamily from "./propertyComponents/Layout/FontFamily";
import FontSize from "./propertyComponents/Layout/FontSize";
import TextColor from "./propertyComponents/Layout/TextColor";
// import { mapState } from "vuex";
import vuescroll from "vuescroll";
export default {
  components: {
    vuescroll,
    BackgroundColor,
    FontFamily,
    FontSize,
    TextColor,
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
      propertiesArray: [],
    };
  },
};
</script>

<style scoped>
.adjust-section-wrapper {
  height: 100%;
  overflow: hidden;
}
.customizer-body-scroll {
  width: 100%;
}
.layout-customizer-container {
  margin: auto;
  border: 0 !important;
  width: 90% !important;
}
</style>
<style>
.property-wrapper {
  padding: 10px 0;
  /* background-color: rgb(35, 35, 35) !important; */
  background-color: transparent !important;
}

.ant-collapse-header {
  background-color: rgb(61, 61, 61);
}
.customizer-sub-title {
  margin-bottom: 5px;
  font-weight: 700;
  color: rgb(179, 176, 176);
}
.customizer-input-number {
  width: 60px !important;
}
.customizer-sub-sub-title {
  margin-bottom: 5px;
  font-weight: 500;
  color: rgb(138, 137, 137);
}
.fade-enter-active {
  transition: transform 0.5s;
}
.fade-enter {
  transform: translateX(70px);
}
</style>
