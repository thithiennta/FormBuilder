<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color':
        properties.general.backgroundColor.indexOf('0)') !== -1
          ? layoutSettings.backgroundColor
          : properties.general.backgroundColor,
      'font-size': properties.text.inheritSize
        ? layoutSettings.fontSize + 'px'
        : properties.text.size + 'px',
      margin:
        properties.spacing.topMargin +
        'px ' +
        properties.spacing.rightMargin +
        'px ' +
        properties.spacing.bottomMargin +
        'px ' +
        properties.spacing.leftMargin +
        'px ',
    }"
  >
    <div
      class="input-field-name"
      :style="{
        'font-size': layoutSettings.input.labelSize + 'px',
        'font-weight': layoutSettings.input.labelBold ? 'bold' : '',
        'font-style': layoutSettings.input.labelItalic ? 'italic' : '',
        'min-width': 'fit-content',
        ...margin,
      }"
      v-if="layoutSettings.input.isOutsideLabel"
    >
      {{ properties.text.fieldName }}
    </div>
    <div class="select-wrapper">
      <div
        class="margin-left"
        :style="{ width: properties.option.leftMargin + '%' }"
      ></div>
      <div
        class="select"
        :style="{
          width: properties.spacing.width + '%',
          'min-width': 'fit-content',
        }"
      >
        <div
          class="select__trigger"
          @click="handleShowOptions"
          :style="{
            ...padding,
            'border-radius': properties.border.radius + 'px',
            color: properties.text.inheritColor
              ? layoutSettings.color
              : properties.text.color,
          }"
        >
          <span>{{ properties.option.options[0] }}</span>
          <a-icon type="down" :class="{ 'icon-show': showOptions }" />
        </div>
        <div
          class="select-options"
          :class="{ show: showOptions }"
          :style="{
            'border-radius': properties.border.radius + 'px',
            color: properties.text.inheritColor
              ? layoutSettings.color
              : properties.text.color,
          }"
        >
          <div
            class="option"
            v-for="(option, index) in properties.option.options"
            :key="index"
            :style="{ ...padding }"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showOptions: false,
    };
  },
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  watch: {
    activeElement() {
      this.showOptions = false;
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
    padding() {
      if (this.properties.spacing.fullPadding) {
        return {
          padding:
            this.properties.spacing.topPadding +
            "px " +
            this.properties.spacing.rightPadding +
            "px " +
            this.properties.spacing.bottomPadding +
            "px " +
            this.properties.spacing.leftPadding +
            "px ",
        };
      } else {
        return {
          padding: this.properties.spacing.allSidesPadding + "px",
        };
      }
    },
    margin() {
      if (this.properties.general.label.inheritLabelMargin) {
        return {
          margin:
            this.layoutSettings.input.labelTopMargin +
            "px " +
            this.layoutSettings.input.labelRightMargin +
            "px " +
            this.layoutSettings.input.labelBottomMargin +
            "px " +
            this.layoutSettings.input.labelLeftMargin +
            "px ",
        };
      }
      return {
        margin:
          this.properties.general.label.labelTopMargin +
          "px " +
          this.properties.general.label.labelRightMargin +
          "px " +
          this.properties.general.label.labelBottomMargin +
          "px " +
          this.properties.general.label.labelLeftMargin +
          "px ",
      };
    },
  },
  methods: {
    handleShowOptions() {
      this.showOptions = !this.showOptions;
    },
  },
};
</script>

<style scoped>
.select-wrapper {
  display: flex;
}
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
