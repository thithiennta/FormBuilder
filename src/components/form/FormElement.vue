<template>
  <div
    @click="handleShowOptions"
    @mouseover="handleOver"
    @mouseout="handleOut"
    class="element-big-wrapper"
    :class="{
      'active-element': isActive,
      'hover-element': isHover && !isActive,
    }"
    ref="element"
    :id="formElement.rowId"
    :style="{ ...topElementPadding }"
  >
    <div class="detect-element">
      {{ formElement.type.indexOf("Column") !== -1 ? "Row" : "Content" }}
    </div>
    <!-- <div class="element-moving-options" v-if="isActive">
      <a-icon type="drag" class="element-moving-handle" />
    </div> -->
    <component
      :is="formElement.type"
      :rowId="formElement.rowId"
      :properties="formElement.properties"
      :nestedElements="formElement.elements"
    ></component>
    <a-dropdown
      :trigger="['click']"
      class="element-more-options"
      v-if="isActive"
    >
      <a
        class="ant-dropdown-link"
        @click="
          (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        "
      >
        <a-icon type="more" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item key="0" @click="showDupModal">
          <a-icon type="copy" />Dupplicate this element
        </a-menu-item>
        <a-menu-item key="1" @click="showDeleteModal">
          <a-icon type="delete" />Delete this element
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "./elementComponents/Button";
import Input from "./elementComponents/Input";
import TextArea from "./elementComponents/TextArea";
import Title from "./elementComponents/Title";
import CustomText from "./elementComponents/CustomText";
import OneColumn from "./elementComponents/OneColumn";
import TwoColumn from "./elementComponents/TwoColumn";
import ThreeColumn from "./elementComponents/ThreeColumn";
import FourColumn from "./elementComponents/FourColumn";
import Divider from "./elementComponents/Divider";
import RadioGroup from "./elementComponents/RadioGroup";
import CheckBoxGroup from "./elementComponents/CheckBoxGroup";
import DropdownList from "./elementComponents/DropdownList";
import DatePicker from "./elementComponents/DatePicker";
import GCaptcha from "./elementComponents/GCaptcha";
import Spacer from "./elementComponents/Spacer";
import Date from "./elementComponents/Date";
import FileUpload from "./elementComponents/FileUpload";
import { Modal, message } from "ant-design-vue";
export default {
  components: {
    Button,
    Input,
    TextArea,
    Title,
    OneColumn,
    TwoColumn,
    ThreeColumn,
    FourColumn,
    Divider,
    CustomText,
    RadioGroup,
    CheckBoxGroup,
    DropdownList,
    DatePicker,
    GCaptcha,
    Date,
    Spacer,
    FileUpload,
  },
  props: {
    formElement: {
      required: true,
      type: Object,
    },
    parentElement: {
      required: false,
      type: Array,
    },
    isTopElement: {
      required: true,
      type: Boolean,
    },
  },
  computed: {
    ...mapState("customizerModule", ["haveActiveElement", "activeElement"]),
    topElementPadding() {
      if (this.formElement.type.indexOf("Column") === -1 && this.isTopElement) {
        return {
          "padding-left": "3px",
          "padding-right": "3px",
        };
      }
      return {};
    },
  },
  data() {
    return {
      isActive: null,
      isHover: false,
      deleteVisible: false,
      confirmLoading: false,
    };
  },
  created() {
    if (this.formElement.rowId === this.activeElement.rowId) {
      this.isActive = true;
      this.addClickOutSideEvent();
      // this.$store.commit("formModule/CLONE_STATE");
    } else this.isActive = false;
  },
  watch: {
    isActive(value) {
      if (!value) {
        if (this.haveActiveElement)
          if (this.formElement.rowId === this.activeElement.rowId)
            this.$store.dispatch("customizerModule/unselectElement");
      } else {
        this.$store.dispatch(
          "customizerModule/selectElement",
          this.formElement
        );
      }
    },
    activeElement() {
      if (this.formElement.rowId !== this.activeElement.rowId)
        this.isActive = false;
    },
  },
  beforeDestroy() {
    this.removeClickOutSideEvent();
  },
  methods: {
    deleteElement() {
      this.$store.dispatch("formModule/deleteElement", {
        parent: this.parentElement,
        element: this.formElement,
      });
    },
    dupplicateElement() {
      this.$store.dispatch("formModule/dupplicateElement", {
        parent: this.parentElement,
        element: this.formElement,
      });
    },
    addClickOutSideEvent() {
      var formSide = document.getElementById("form-side");
      formSide.addEventListener("click", this.handleClickOutSide);
    },
    removeClickOutSideEvent() {
      var formSide = document.getElementById("form-side");
      formSide.removeEventListener("click", this.handleClickOutSide);
    },
    handleClickOutSide(e) {
      var formSide = document.getElementById("form-side");
      var element = document.getElementById(this.formElement.rowId);
      if (formSide.contains(e.target)) {
        if (!element.contains(e.target)) {
          this.isActive = false;
          this.removeClickOutSideEvent();
        }
      }
    },
    handleShowOptions(e) {
      e.stopPropagation();
      this.addClickOutSideEvent();
      this.$store.dispatch("customizerModule/switchActiveTab", true);
      this.isActive = true;
    },
    handleOver(e) {
      e.stopPropagation();
      this.isHover = true;
    },
    handleOut(e) {
      e.stopPropagation();
      this.isHover = false;
    },
    showDeleteModal() {
      Modal.confirm({
        title: "Confirmation",
        content: "Do you want to delete this element?",
        okText: "Delete",
        cancelText: "Cancel",
        onOk: this.handleOk,
        onCancel: this.handleCancel,
      });
    },
    handleOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        message.success({
          content: "Element deleted successfully",
          duration: 1,
        });
        this.$store.dispatch("customizerModule/unselectElement");
        this.deleteElement();
      });
    },
    handleCancel() {},
    showDupModal() {
      Modal.confirm({
        title: "Confirmation",
        content: () => (
          <div>
            <div>Do you want to dupplicate this element? </div>
            <div>New element will be created at bottom of this!</div>
          </div>
        ),
        okText: "Ok",
        cancelText: "Cancel",
        onOk: this.handleDupOk,
        onCancel: this.handleCancel,
      });
    },
    handleDupOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        message.success({
          content: "Element dupplicated successfully",
          duration: 1,
        });
        this.$store.dispatch("customizerModule/unselectElement");
        this.dupplicateElement();
      });
    },
  },
};
</script>

<style scoped>
.sortable-chosen.form-element-ghost .element-big-wrapper {
  height: fit-content;
  border: 3px solid grey;
}
.sortable-chosen.form-element-ghost .element-big-wrapper .element-big-wrapper {
  border: none !important;
}
.sortable-chosen.form-element-ghost .element-big-wrapper.hover-element {
  border: 3px solid grey;
}
.sortable-chosen.form-element-ghost
  .element-big-wrapper.hover-element
  .detect-element {
  display: none;
}
.sortable-chosen .element-big-wrapper .element-more-options {
  opacity: 0;
}
.element-big-wrapper {
  border: 3px solid transparent;
  position: relative;
  /* transition: all 0.2s ease-in-out; */
  /* margin: 1px;
  margin-right: 0; */
}
.detect-element {
  display: none;
  position: absolute;
  top: calc(100% + 1px);
  right: -3px;
  background-color: rgb(110, 206, 248);
  width: fit-content;
  padding: 5px 10px;
  font-size: 16px !important;
  color: #000000 !important;
  font-family: "Open sans", sans-serif !important;
  z-index: 999;
}
.element-big-wrapper.hover-element > .detect-element {
  display: block;
  background-color: rgb(111, 156, 177);
}
.element-big-wrapper.hover-element {
  /* outline: 3px solid rgb(111, 156, 177);
  z-index: 997; */
  border: 3px solid rgb(111, 156, 177);
}
.element-more-options {
  position: absolute;
  right: 10px;
  top: 5px;
  padding: 3px;
  border-radius: 4px;
  font-size: 13px;
  color: black;
  z-index: 999;
}
.element-more-options.ant-dropdown-open {
  background-color: rgb(243, 241, 241);
}
.element-moving-options {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc(100% + 5px);
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  z-index: 999;
}
.element-moving-options i {
  background-color: rgb(110, 206, 248);
  padding: 4px;
  font-size: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.active-element {
  /* outline: 3px solid rgb(113, 203, 244);
  z-index: 996; */
  border: 3px solid rgb(113, 203, 244);
}
.form-element-wrapper {
  padding: 10px;
  background-color: white;
}
</style>
