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
      @click="handleLoadSavedForm"
    >
      <template slot="title">
        <span>Load Saved Form</span>
      </template>
      <a-icon type="download" />
    </a-tooltip>
    <a-badge :count="2" :overflow-count="5" class="new-feature">
      <a-icon type="notification" @click="showNewFeature" />
    </a-badge>
  </div>
</template>

<script>
import { notification } from "ant-design-vue";
import basicForms from "../../utils/basicForms.js";
import { Modal, message } from "ant-design-vue";
export default {
  data() {
    return {};
  },
  methods: {
    handleUseSampleForm() {
      Modal.confirm({
        title: "Use sample form",
        content:
          "When do this, you will get our sample form. All history will be lost and you cannot go back anymore. Will you use this?",
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
    handleSaveForm() {
      Modal.confirm({
        title: "Save your form",
        content:
          "Save this with your account. You can load this form whenever you want!",
        okText: "Save",
        cancelText: "Cancel",
        onOk: this.handleSaveOk,
        onCancel: this.handleCancel,
      });
    },
    handleLoadSavedForm() {
      Modal.confirm({
        title: "Load your saved form",
        content:
          "Load your form from database. This will delete all current form!",
        okText: "Load",
        cancelText: "Cancel",
        onOk: this.handleLoadOk,
        onCancel: this.handleCancel,
      });
    },
    handleNewOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        this.$store.dispatch("formModule/initForm", basicForms.emptyForm);
        message.success("Created new blank form");
      });
    },
    handleSampleOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        this.$store.dispatch("formModule/initForm", basicForms.defaultForm);
        message.success("Used sample form");
      });
    },
    handleSaveOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        this.$store.dispatch(
          "formModule/loadSavedForm",
          basicForms.defaultForm
        );
        message.success("Save form completely");
      });
    },
    handleLoadOk() {
      return new Promise((resolve) => {
        setTimeout(resolve, 1000);
      }).then(() => {
        message.success("Load your saved form completely");
      });
    },
    handleCancel() {},
    showNewFeature() {
      notification.open({
        message: "New Features",
        description: () => {
          return (
            <div>
              <div>1. Update file upload to show preview image</div>
              <div>2. Add multi step form and its features</div>
            </div>
          );
        },
      });
    },
  },
};
</script>

<style scoped>
.new-feature >>> sup {
  top: 10px;
  right: 7px;
}
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
