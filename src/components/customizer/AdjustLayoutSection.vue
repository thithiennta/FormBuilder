<template>
  <div class="adjust-section-wrapper">
    <vuescroll :ops="options" class="customizer-body-scroll">
      <a-collapse
        default-active-key="1"
        :bordered="false"
        expand-icon-position="right"
        class="property-wrapper"
      >
        <a-collapse-panel
          key="1"
          header="LAYOUT STYLES"
          class="customizer-container"
        >
          <BackgroundColor />
          <FontFamily />
          <FontSize />
          <TextColor />
        </a-collapse-panel>
      </a-collapse>
      <a-collapse
        default-active-key="1"
        :bordered="false"
        expand-icon-position="right"
        class="property-wrapper"
      >
        <a-collapse-panel
          key="1"
          header="FORM SETTINGS"
          class="customizer-container"
        >
          <Action />
          <Method />
        </a-collapse-panel>
      </a-collapse>
      <a-collapse
        default-active-key="1"
        :bordered="false"
        expand-icon-position="right"
        class="property-wrapper"
      >
        <a-collapse-panel
          key="1"
          header="INPUT SETTINGS"
          class="customizer-container"
        >
          <Label />
          <LabelWidth
            v-if="
              layoutSettings.input.isOutsideLabel &&
                layoutSettings.input.labelPosition === 'left'
            "
          />
          <LabelSize v-if="layoutSettings.input.isOutsideLabel" />
          <LabelStyle v-if="layoutSettings.input.isOutsideLabel" />
          <LabelMargin v-if="layoutSettings.input.isOutsideLabel" />
        </a-collapse-panel>
      </a-collapse>
    </vuescroll>
  </div>
</template>

<script>
import BackgroundColor from "./propertyComponents/Layout/BackgroundColor";
import FontFamily from "./propertyComponents/Layout/FontFamily";
import FontSize from "./propertyComponents/Layout/FontSize";
import TextColor from "./propertyComponents/Layout/TextColor";
import Action from "./propertyComponents/Layout/Action";
import Method from "./propertyComponents/Layout/Method";
import Label from "./propertyComponents/Layout/Input/Label";
import LabelSize from "./propertyComponents/Layout/Input/LabelSize";
import LabelWidth from "./propertyComponents/Layout/Input/LabelWidth";
import LabelStyle from "./propertyComponents/Layout/Input/LabelStyle";
import LabelMargin from "./propertyComponents/Layout/Input/LabelMargin";
import { mapState } from "vuex";
import vuescroll from "vuescroll";
export default {
  components: {
    vuescroll,
    BackgroundColor,
    FontFamily,
    FontSize,
    TextColor,
    Action,
    Method,
    Label,
    LabelSize,
    LabelStyle,
    LabelMargin,
    LabelWidth,
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
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
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
.customizer-container {
  margin-bottom: 10px !important;
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
