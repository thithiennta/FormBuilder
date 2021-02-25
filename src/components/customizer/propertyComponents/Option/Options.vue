<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Options
      <div class="setting-switch">
        Use List
        <a-switch v-model="useList">
          <a-icon slot="checkedChildren" type="check" />
          <a-icon slot="unCheckedChildren" type="close" />
        </a-switch>
      </div>
    </div>
    <div class="property-adjust-wrapper" v-if="!useList">
      <a-button
        type="primary"
        v-if="!options.length"
        @click="handleAddOption(0)"
      >
        Add
      </a-button>
      <div
        v-for="(option, index) in activeElement.properties.option.options"
        :key="index"
        class="option-wrapper"
      >
        <div class="customizer-sub-sub-title">
          Option {{ index + 1 }}
          <div class="option-action" :id="'option-action-' + index">
            <a-icon type="plus" @click="handleAddOption(index)" />
            <a-icon type="delete" @click="handleRemoveOption(index)" />
          </div>
        </div>
        <a-input
          ref="inputName"
          v-model="options[index]"
          :placeholder="'Sample Value'"
          @change="handleChange"
          @mouseenter="handleHover(index)"
          @mouseleave="handleOut(index)"
        >
          <a-icon slot="prefix" type="edit" />
          <a-tooltip slot="suffix" :title="'Value of option'">
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </a-input>
      </div>
    </div>
    <div class="property-adjust-wrapper" v-if="useList">
      <a-textarea
        placeholder="Seperate with the ',' comma"
        auto-size
        v-model="listOptions"
      />
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
  data() {
    return { options: null, useList: true, listOptions: null };
  },
  created() {
    this.options = this.activeElement.properties.option.options;
    this.listOptions = this.options.join(", ");
  },
  watch: {
    options() {},
    activeElement() {
      this.options = this.activeElement.properties.option.options;
      this.listOptions = this.options.join(", ");
    },
    listOptions: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      var holder = this.listOptions.split(",");
      holder = holder.map((item) => item.trim());
      this.activeElement.properties.option.options = holder;
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 500),
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange() {},

    handleAddOption(index) {
      this.options.splice(index + 1, 0, "Sample Value");
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    handleRemoveOption(index) {
      this.options.splice(index, 1);
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    handleHover(index) {
      var el = document.getElementById("option-action-" + index);
      el.classList.add("show");
    },
    handleOut(index) {
      var el = document.getElementById("option-action-" + index);
      el.classList.remove("show");
    },
  },
};
</script>

<style scoped>
.customizer-sub-sub-title {
  display: flex;
  justify-content: space-between;
}
.option-action {
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  top: 30px;
  transition: top 0.3s ease-in-out;
}
.option-action:hover {
  top: 5px;
}
.option-action.show {
  top: 5px;
}
.option-action i {
  padding: 3px 10px;
  color: white;
  cursor: pointer;
}
.option-action i:first-child {
  background-color: #1890ff;
}
.option-action i:nth-child(2) {
  background-color: rgb(186, 35, 35);
}
.option-wrapper {
  margin-bottom: 10px;
}
.option-wrapper:last-child {
  margin-bottom: 0;
}
.property-adjust-wrapper {
  max-height: 200px;
  overflow-y: scroll;
}
.property-adjust-wrapper::-webkit-scrollbar {
  display: none;
}
.property-adjust-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.property-wrapper > .customizer-sub-title {
  position: relative;
  margin-bottom: 10px;
}
.setting-switch {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
</style>
