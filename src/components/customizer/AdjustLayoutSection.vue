<template>
  <div class="adjust-section-wrapper">
    <vuescroll :ops="options" class="customizer-body-scroll">
      <a-collapse
        default-active-key="0"
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
          <FontWeight />
          <TextColor />
          <LayoutPadding />
          <LayoutBorderWidth />
          <LayoutBorderRadius />
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
          <FormType />
          <NumberStep />
        </a-collapse-panel>
      </a-collapse>
      <a-collapse
        default-active-key="0"
        :bordered="false"
        expand-icon-position="right"
        class="property-wrapper"
      >
        <a-collapse-panel
          key="1"
          header="LABEL SETTINGS"
          class="customizer-container"
        >
          <Label />
          <LabelWidth
            v-if="
              layoutSettings.label.isOutsideLabel &&
                layoutSettings.label.labelPosition === 'left'
            "
          />
          <LabelAlignCenter
            v-if="
              layoutSettings.label.isOutsideLabel &&
                layoutSettings.label.labelPosition === 'left'
            "
          />
          <LabelMargin
            v-if="
              layoutSettings.label.isOutsideLabel &&
                layoutSettings.label.labelPosition === 'top'
            "
          />
          <LabelSize v-if="layoutSettings.label.isOutsideLabel" />
          <LabelStyle v-if="layoutSettings.label.isOutsideLabel" />
          <LabelColor v-if="layoutSettings.label.isOutsideLabel" />
        </a-collapse-panel>
      </a-collapse>
      <a-collapse
        default-active-key="0"
        :bordered="false"
        expand-icon-position="right"
        class="property-wrapper"
      >
        <a-collapse-panel
          key="1"
          header="FIELD SETTINGS"
          class="customizer-container"
        >
          <FieldHeight />
          <FieldBackgroundColor />
        </a-collapse-panel>
      </a-collapse>
      <a-collapse
        default-active-key="0"
        :bordered="false"
        expand-icon-position="right"
        class="property-wrapper"
      >
        <a-collapse-panel
          key="1"
          header="BORDER SETTINGS"
          class="customizer-container"
        >
          <BorderWidth />
          <BorderStyle />
          <BorderRadius />
          <BorderColor />
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
import FontWeight from "./propertyComponents/Layout/FontWeight";
import LayoutPadding from "./propertyComponents/Layout/LayoutPadding";
import LayoutBorderWidth from "./propertyComponents/Layout/LayoutBorderWidth";
import LayoutBorderRadius from "./propertyComponents/Layout/LayoutBorderRadius";
import Action from "./propertyComponents/Layout/Action";
import FormType from "./propertyComponents/Layout/FormType";
import NumberStep from "./propertyComponents/Layout/NumberStep";
import Method from "./propertyComponents/Layout/Method";
import Label from "./propertyComponents/Layout/Label/Label";
import LabelSize from "./propertyComponents/Layout/Label/LabelSize";
import LabelWidth from "./propertyComponents/Layout/Label/LabelWidth";
import LabelStyle from "./propertyComponents/Layout/Label/LabelStyle";
import LabelMargin from "./propertyComponents/Layout/Label/LabelMargin";
import LabelColor from "./propertyComponents/Layout/Label/LabelColor";
import LabelAlignCenter from "./propertyComponents/Layout/Label/LabelAlignCenter";
import BorderColor from "./propertyComponents/Layout/Border/BorderColor";
import BorderRadius from "./propertyComponents/Layout/Border/BorderRadius";
import BorderStyle from "./propertyComponents/Layout/Border/BorderStyle";
import BorderWidth from "./propertyComponents/Layout/Border/BorderWidth";
import FieldHeight from "./propertyComponents/Layout/Field/FieldHeight";
import FieldBackgroundColor from "./propertyComponents/Layout/Field/FieldBackgroundColor";
import { mapState } from "vuex";
import vuescroll from "vuescroll";
export default {
  components: {
    vuescroll,
    BackgroundColor,
    FontFamily,
    FontSize,
    TextColor,
    FontWeight,
    LayoutBorderWidth,
    LayoutBorderRadius,
    Action,
    Method,
    NumberStep,
    FormType,
    Label,
    LabelSize,
    LabelStyle,
    LabelMargin,
    LabelWidth,
    LabelColor,
    LabelAlignCenter,
    BorderColor,
    BorderRadius,
    BorderStyle,
    BorderWidth,
    FieldHeight,
    FieldBackgroundColor,
    LayoutPadding,
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
.new-feature {
  top: -5px;
  margin-right: 100px;
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
