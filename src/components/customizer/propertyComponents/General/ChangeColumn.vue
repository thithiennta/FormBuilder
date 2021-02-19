<template>
  <div class="property-wrapper">
    <div class="columns-wrapper">
      <div
        class="column-wrapper"
        @click="handleClick('OneColumn')"
        :class="{ disable: columnDisable('OneColumn') }"
      >
        <div class="column-item" style="width:100%">
          {{ columnDisable("OneColumn") ? 1 : "" }}
        </div>
      </div>
      <div
        class="column-wrapper"
        @click="handleClick('TwoColumn')"
        :class="{ disable: columnDisable('TwoColumn') }"
      >
        <div
          class="column-item"
          v-for="val in [1, 2]"
          :key="val"
          style="width:50%"
        >
          {{ columnDisable("TwoColumn") ? val : "" }}
        </div>
      </div>
      <div
        class="column-wrapper"
        @click="handleClick('ThreeColumn')"
        :class="{ disable: columnDisable('ThreeColumn') }"
      >
        <div
          class="column-item"
          v-for="val in [1, 2, 3]"
          :key="val"
          style="width:33.3%"
        >
          {{ columnDisable("ThreeColumn") ? val : "" }}
        </div>
      </div>
      <div
        class="column-wrapper"
        @click="handleClick('FourColumn')"
        :class="{ disable: columnDisable('FourColumn') }"
      >
        <div
          class="column-item"
          v-for="val in [1, 2, 3, 4]"
          :key="val"
          style="width:25%"
        >
          {{ columnDisable("FourColumn") ? val : "" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "ant-design-vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: null,
      target: null,
    };
  },
  created() {
    this.value = this.activeElement.type;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    activeElement() {
      this.value = this.activeElement.type;
    },
  },
  methods: {
    numberCol(type) {
      if (type === "OneColumn") return 1;
      else if (type === "TwoColumn") return 2;
      else if (type === "ThreeColumn") return 3;
      else return 4;
    },
    columnDisable(type) {
      if (type === this.value) {
        return true;
      }
      return false;
    },
    handleClick(type) {
      const currentCols = this.numberCol(this.activeElement.type);
      const targetCols = this.numberCol(type);
      this.target = type;
      this.showModal(currentCols, targetCols);
    },
    showModal(current, target) {
      const columns = Math.abs(current - target) <= 1 ? " column" : " columns";
      const action =
        current > target
          ? "Remove " + Math.abs(current - target) + columns
          : "Add " + Math.abs(current - target) + columns;
      Modal.confirm({
        title: "Change Column",
        content:
          action + ", some contents will be lost. Do you want to continue ?",
        okText: "Change",
        cancelText: "Cancel",
        onOk: this.handleOk,
        onCancel: this.handleCancel,
      });
    },
    handleOk() {
      this.value = this.target;
      this.$store.dispatch("customizerModule/changeColumn", this.target);
    },
  },
};
</script>

<style scoped>
.columns-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.column-wrapper {
  width: 48%;
  height: 30px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: rgb(236, 234, 234);
  display: flex;
  cursor: pointer;
}
.column-wrapper.disable {
  background-color: white;
  pointer-events: none;
}
.column-item {
  border-right: 3px solid rgb(172, 172, 172);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: grey;
}
.column-wrapper .column-item:last-child {
  border-right: none;
}
</style>
