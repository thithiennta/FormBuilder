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
        'font-size': layoutSettings.label.labelSize + 'px',
        'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
        'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
        'min-width': 'fit-content',
        color: layoutSettings.label.labelColor,
        'margin-bottom': layoutSettings.label.labelBottomMargin + 'px',
      }"
      v-if="
        layoutSettings.label.isOutsideLabel &&
          layoutSettings.label.labelPosition === 'top'
      "
    >
      {{ properties.text.fieldName }}
    </div>
    <div
      class="select-wrapper"
      :style="{
        display: 'flex',
        'align-items': layoutSettings.label.labelAlignCenter ? 'center' : '',
      }"
    >
      <div
        class="input-field-name"
        :style="{
          width: properties.general.label.inheritLabelMargin
            ? layoutSettings.label.labelWidth + 'px'
            : properties.general.label.labelRightMargin + 'px',
          'font-size': layoutSettings.label.labelSize + 'px',
          'font-weight': layoutSettings.label.labelBold ? 'bold' : '',
          'font-style': layoutSettings.label.labelItalic ? 'italic' : '',
          'min-width': 'fit-content',
          color: layoutSettings.label.labelColor,
        }"
        v-if="
          layoutSettings.label.isOutsideLabel &&
            layoutSettings.label.labelPosition === 'left'
        "
      >
        {{ properties.text.fieldName }}
      </div>
      <div
        class="select"
        :style="{
          width: properties.spacing.width + '%',
          'min-width': 'fit-content',
          'background-color': layoutSettings.field.backgroundColor,
          'border-radius': layoutSettings.border.radius + 'px',
          ...maxWidth,
        }"
      >
        <div
          class="select__trigger"
          @click="handleShowOptions"
          :style="{
            padding: layoutSettings.field.padding + 'px',
            'border-radius': layoutSettings.border.radius + 'px',
            color: properties.text.inheritColor
              ? layoutSettings.color
              : properties.text.color,
            ...border,
            'font-weight': layoutSettings.weight,
            height: layoutSettings.field.height + 'px',
          }"
        >
          <span>{{ properties.option.options[0] }}</span>
          <a-icon type="down" :class="{ 'icon-show': showOptions }" />
        </div>
        <div
          class="select-options"
          :class="{ show: showOptions }"
          :style="{
            'border-radius': layoutSettings.border.radius + 'px',
            color: properties.text.inheritColor
              ? layoutSettings.color
              : properties.text.color,
            ...border,

            'font-weight': layoutSettings.weight,
          }"
        >
          <div
            class="option"
            v-for="(option, index) in properties.option.options"
            :key="index"
            :style="{
              padding: layoutSettings.field.padding + 'px',
              'background-color': layoutSettings.field.backgroundColor,
            }"
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
    maxWidth() {
      if (
        this.layoutSettings.label.labelPosition === "left" &&
        this.layoutSettings.label.isOutsideLabel
      ) {
        return {
          "max-width":
            "calc(" +
            100 +
            "% - " +
            (this.properties.general.label.inheritLabelMargin
              ? this.layoutSettings.label.labelWidth
              : this.properties.general.label.labelRightMargin) +
            "px)",
        };
      }
      return {};
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
.form-element-wrapper {
  user-select: none;
}
</style>
