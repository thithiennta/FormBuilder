<template>
  <a-collapse
    default-active-key="1"
    :bordered="false"
    expand-icon-position="right"
    class="property-wrapper"
  >
    <a-collapse-panel key="1" header="GENERAL" class="customizer-container">
      <component
        v-for="(property, index) in propertiesArray"
        :key="index"
        :is="property"
      ></component>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { getElementsByType } from "../../../utils/settingSubPropertyUtils";
import { mapState } from "vuex";
import BackgroundColor from "./General/BackgroundColor";
import DividerColor from "./General/DividerColor";
import DividerSize from "./General/DividerSize";
import DividerStyle from "./General/DividerStyle";
import FontFamily from "./General/FontFamily";
import ChangeColumn from "./General/ChangeColumn";
import LabelMargin from "./General/LabelMargin";
import SubLabel from "./General/SubLabel";
import OutsideLabel from "./General/OutsideLabel";
import InputType from "./General/InputType";
import Require from "./General/Require";
import StatusSettings from "./General/StatusSettings";
import StayWithStep from "./General/StayWithStep";
import ButtonPurpose from "./General/ButtonPurpose";
export default {
  components: {
    BackgroundColor,
    DividerColor,
    DividerSize,
    DividerStyle,
    FontFamily,
    ChangeColumn,
    LabelMargin,
    SubLabel,
    OutsideLabel,
    InputType,
    Require,
    StatusSettings,
    StayWithStep,
    ButtonPurpose,
  },
  data() {
    return {
      propertiesArray: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.propertiesArray = this.getElementsByType();
  },
  watch: {
    activeElement() {
      this.propertiesArray = this.getElementsByType();
    },
  },
  methods: {
    getElementsByType() {
      return getElementsByType("general", this.activeElement.type);
    },
  },
};
</script>
<style scoped>
.customizer-container {
  margin-bottom: 10px !important;
}
</style>
