<template>
  <div class="form-layout-control">
    <a-tooltip
      placement="bottom"
      class="item-wrapper"
      @click="handleUseSampleForm"
    >
      <template slot="title">
        <span>Sample Form</span>
      </template>
      <a-icon type="rollback" />
    </a-tooltip>
    <a-tooltip placement="bottom" class="item-wrapper" @click="handleNewForm">
      <template slot="title">
        <span>Blank Form</span>
      </template>
      <a-icon type="file" />
    </a-tooltip>
    <a-tooltip placement="bottom" class="item-wrapper" @click="handleSaveForm">
      <template slot="title">
        <span>Save Form</span>
      </template>
      <a-icon type="save" />
    </a-tooltip>
    <a-tooltip
      placement="bottom"
      class="item-wrapper"
      @click="handleDownloadForm"
    >
      <template slot="title">
        <span>Download Form</span>
      </template>
      <a-icon type="download" />
    </a-tooltip>
  </div>
</template>

<script>
import defaultForm from "../../utils/defaultForm.js";
import { Modal } from "ant-design-vue";
export default {
  data() {
    return {};
  },
  methods: {
    handleUseSampleForm() {
      Modal.confirm({
        title: "Use sample form",
        content:
          "When do this, you will get our sample form. All history will be lost and you can go back anymore. Will you use this?",
        okText: "Use",
        cancelText: "Cancel",
        onOk: this.handleSampleOk,
        onCancel: this.handleCancel,
      });
    },
    handleNewForm() {
      Modal.confirm({
        title: "New blank form",
        content:
          "When do this, all of your settings will be lost. You will receive an empty form, will you do this?",
        okText: "Confirm",
        cancelText: "Cancel",
        onOk: this.handleNewOk,
        onCancel: this.handleCancel,
      });
    },
    handleSaveForm() {},
    handleDownloadForm() {},
    handleNewOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        this.$store.dispatch("formModule/initForm", {
          elements: [],
          layoutSettings: {},
          nextStates: [],
          previousStates: [],
        });
      });
    },
    handleSampleOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        this.$store.dispatch("formModule/initForm", defaultForm);
      });
    },
    handleSaveOk() {},
    handleDownloadOk() {},
    handleCancel() {},
  },
};
</script>

<style scoped>
.form-layout-control {
  position: absolute;
  left: 5px;
  top: 5px;
  display: flex;
  width: fit-content;
  border-radius: 5px;
}
.form-layout-control i {
  cursor: pointer;
  background-color: rgb(225, 224, 224);
  padding: 10px;
  font-size: 20px;
  color: black;
  border-radius: 5px;
  margin-right: 10px;
}
</style>
