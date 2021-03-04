<template>
  <div
    class="select"
    :style="{
      'min-width': 'fit-content',
      'background-color': layoutSettings.field.backgroundColor,
      'border-radius': layoutSettings.border.radius + 'px',
    }"
  >
    <div
      class="select__trigger"
      @click="handleShowOptions"
      :style="{
        padding: layoutSettings.field.padding + 'px',
        'border-radius': layoutSettings.border.radius + 'px',
        color: layoutSettings.color,
        ...border,
        'font-weight': layoutSettings.weight,
        height: layoutSettings.field.height + 'px',
      }"
    >
      <span>{{ currentValue === null ? options[0] : currentValue }}</span>
      <a-icon type="down" :class="{ 'icon-show': showOptions }" />
    </div>
    <div
      class="select-options"
      :class="{ show: showOptions }"
      :style="{
        'border-radius': layoutSettings.border.radius + 'px',
        color: layoutSettings.color,
        ...border,
        'font-weight': layoutSettings.weight,
      }"
    >
      <div
        class="option"
        v-for="(option, index) in options"
        :key="index"
        :style="{
          'background-color': layoutSettings.field.backgroundColor,
        }"
        @click="handleChangeOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    options: {
      required: true,
      type: Array,
    },
    textColor: {
      required: true,
      type: String,
    },
    textInheritColor: {
      required: true,
      type: Boolean,
    },
    showOptions: {
      required: true,
      type: Boolean,
    },
    type: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      currentValue: null,
    };
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
    border() {
      if (this.layoutSettings.border.fullWidth) {
        return {
          "border-style": this.layoutSettings.border.style,
          "border-color": this.layoutSettings.border.color,
          "border-top-width": this.layoutSettings.border.topWidth + "px ",
          "border-right-width": this.layoutSettings.border.rightWidth + "px ",
          "border-bottom-width": this.layoutSettings.border.bottomWidth + "px ",
          "border-left-width": this.layoutSettings.border.leftWidth + "px ",
        };
      } else {
        return {
          border:
            this.layoutSettings.border.allSidesWidth +
            "px " +
            this.layoutSettings.border.style +
            " " +
            this.layoutSettings.border.color,
        };
      }
    },
  },
  methods: {
    handleShowOptions() {
      this.$emit("emitShowOptions", this.type);
    },
    handleChangeOption(value) {
      this.currentValue = value;
      this.$emit("emitChangeOption", this.type, value);
    },
  },
};
</script>

<style scoped>
.select {
  position: relative;
  min-width: fit-content;
  border-radius: 5px;
}
.select__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(174, 170, 170);
  cursor: pointer;
}
.select__trigger i {
  margin-left: 20px;
  font-size: 10px;
  transform: rotate(-90deg);
  transition: transform 0.3s ease-in-out;
}
.select__trigger i.icon-show {
  transform: rotate(0);
}
.select-options {
  position: absolute;
  background-color: white;
  width: 100%;
  z-index: 999;
  border: 1px solid rgb(174, 170, 170);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
  max-height: 200px;
  overflow-y: scroll;
}
.select-options::-webkit-scrollbar {
  display: none;
}
.select-options {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.select-options.show {
  opacity: 1;
  pointer-events: initial;
}
.select-options .option:hover {
  background-color: rgb(243, 243, 243);
}
</style>
