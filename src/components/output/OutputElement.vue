<template>
  <div class="element-big-wrapper" :id="formElement.rowId" v-if="showWhenStep">
    <component
      :is="formElement.type"
      :properties="formElement.properties"
      :nestedElements="formElement.elements"
      :rowId="formElement.rowId"
    ></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "./Button";
import CustomText from "./CustomText";
import OneColumn from "./OneColumn";
import TwoColumn from "./TwoColumn";
import ThreeColumn from "./ThreeColumn";
import FourColumn from "./FourColumn";
import Input from "./Input";
import Title from "./Title";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
import TextArea from "./TextArea";
import CheckBoxGroup from "./CheckBoxGroup";
import RadioGroup from "./RadioGroup";
import DropdownList from "./DropdownList";
import DatePicker from "./DatePicker";
import Divider from "./Divider";
import Date from "./Date";
import FileUpload from "./FileUpload";
import Spacer from "./Spacer";
import StepBar from "./StepBar";
export default {
  props: {
    formElement: {
      required: true,
      type: Object,
    },
  },
  components: {
    Button,
    CustomText,
    OneColumn,
    TwoColumn,
    Input,
    Title,
    FourColumn,
    ThreeColumn,
    CheckBox,
    RadioButton,
    TextArea,
    CheckBoxGroup,
    RadioGroup,
    DropdownList,
    DatePicker,
    Date,
    Divider,
    FileUpload,
    Spacer,
    StepBar,
  },
  computed: {
    ...mapState("formModule", ["layoutSettings", "previewCurrentStep"]),
    showWhenStep() {
      if (this.layoutSettings.form.type !== "multi step") {
        return (
          (this.layoutSettings.form.type !== "multi step" &&
            this.formElement.type !== "StepBar" &&
            this.formElement.properties.general.stepPage === 1) ||
          this.layoutSettings.form.type === "multi step"
        );
      } else {
        return (
          this.formElement.properties.general.isKeepWithStep ||
          this.formElement.properties.general.stepPage ===
            this.previewCurrentStep + 1
        );
      }
    },
  },
};
</script>

<style scoped></style>
