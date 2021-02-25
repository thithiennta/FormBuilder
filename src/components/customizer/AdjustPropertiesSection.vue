<template>
  <div class="adjust-section-wrapper">
    <vuescroll :ops="options" class="customizer-body-scroll">
      <component
        v-for="(property, index) in propertiesArray"
        :key="index"
        :is="property"
      ></component>
    </vuescroll>
  </div>
</template>

<script>
import propertyUtils from "../../utils/settingPropertyUtils";
import { mapState } from "vuex";
import vuescroll from "vuescroll";
import SpacingProperties from "./propertyComponents/SpacingProperties";
import TextProperties from "./propertyComponents/TextProperties";
import BorderProperties from "./propertyComponents/BorderProperties";
import BoxProperties from "./propertyComponents/BoxProperties";
import GeneralProperties from "./propertyComponents/GeneralProperties";
import OptionProperties from "./propertyComponents/OptionProperties";
export default {
  components: {
    SpacingProperties,
    TextProperties,
    vuescroll,
    BorderProperties,
    BoxProperties,
    GeneralProperties,
    OptionProperties,
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.propertiesArray = this.getElementsByNames();
  },
  watch: {
    activeElement() {
      this.propertiesArray = this.getElementsByNames();
    },
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
  methods: {
    getElementsByNames() {
      return propertyUtils.getElementsByNames(this.activeElement.settings);
    },
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
</style>
<style>
.property-wrapper {
  padding: 10px 0;
  /* background-color: rgb(35, 35, 35) !important; */
  background-color: transparent !important;
}
.customizer-container {
  border: 0 !important;
  width: 100% !important;
}

.ant-collapse-header {
  background-color: rgb(61, 61, 61);
}
.customizer-sub-title {
  margin-bottom: 5px;
  font-weight: 700;
  color: rgb(179, 176, 176);
}
.ant-collapse-header {
  font-weight: 700 !important;
}
.ant-switch-checked {
  background-color: green !important;
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
.ant-switch-checked {
  background-color: #1890ff !important;
}
</style>
