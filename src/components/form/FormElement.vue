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
  >
    <div class="element-moving-options" v-if="isActive">
      <a-icon type="caret-up" />
      <a-icon type="drag" class="element-moving-handle" />
      <a-icon type="caret-down" />
    </div>
    <component
      :is="formElement.type"
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
        <a-menu-item key="0">
          <a-icon type="copy" />Dupplicate this element
        </a-menu-item>
        <a-menu-item key="1" @click="showDeleteModal">
          <a-icon type="delete" />Delete this element
          <a-modal
            title="Do you want to delete this element?"
            :visible="deleteVisible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
          >
          </a-modal>
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
import CheckBox from "./elementComponents/CheckBox";
import RadioButton from "./elementComponents/RadioButton";
import Title from "./elementComponents/Title";
import OneColumn from "./elementComponents/OneColumn";
import TwoColumn from "./elementComponents/TwoColumn";
import ThreeColumn from "./elementComponents/ThreeColumn";
import FourColumn from "./elementComponents/FourColumn";
import Divider from "./elementComponents/Divider";
export default {
  components: {
    Button,
    Input,
    TextArea,
    CheckBox,
    RadioButton,
    Title,
    OneColumn,
    TwoColumn,
    ThreeColumn,
    FourColumn,
    Divider,
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
  },
  computed: {
    ...mapState("customizerModule", ["haveActiveElement", "activeElement"]),
  },
  data() {
    return {
      isActive: false,
      isHover: false,
      deleteVisible: false,
      confirmLoading: false,
    };
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
  beforeDestroy() {},
  methods: {
    deleteElement() {
      this.removeClickOutSideEvent();
      this.$store.dispatch("formModule/deleteElement", {
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
      this.deleteVisible = true;
    },
    handleOk() {
      this.confirmLoading = true;
      setTimeout(() => {
        this.deleteVisible = false;
        this.confirmLoading = false;
        this.$store.dispatch("customizerModule/unselectElement");
        this.deleteElement();
      }, 1000);
    },
    handleCancel() {
      this.deleteVisible = false;
    },
  },
};
</script>

<style scoped>
.element-big-wrapper {
  position: relative;
  transition: all 0.2s ease-in-out;
}
.element-big-wrapper.hover-element {
  z-index: 999;
  transition: border 0s !important;
  outline: 3px solid rgb(113, 203, 244);
}
.element-more-options {
  position: absolute;
  right: 10px;
  top: 5px;
  padding: 3px;
  border-radius: 4px;
  font-size: 10px;
  color: black;
}
.element-more-options.ant-dropdown-open {
  background-color: rgb(243, 241, 241);
}
.element-moving-options {
  position: absolute;
  top: 0;
  left: -22px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
}
.element-moving-options i {
  background-color: rgb(237, 236, 236);
  padding: 4px;
  font-size: 10px;
  color: rgb(181, 180, 180);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.element-moving-options i:hover {
  color: black;
  background-color: rgb(229, 229, 229);
}
.active-element {
  margin: 5px 0;
  box-shadow: 2px 3px 6px 2px rgb(205, 201, 201);
}
.form-element-wrapper {
  padding: 10px;
  background-color: white;
}
</style>
