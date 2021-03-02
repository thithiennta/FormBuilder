<template>
  <div class="element-big-wrapper" :id="formElement.rowId">
    <component
      :is="formElement.type"
      :properties="formElement.properties"
      :nestedElements="formElement.elements"
    ></component>
  </div>
</template>

<script>
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
import Date from "./Date";
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
  },
};
</script>

<style scoped></style>
