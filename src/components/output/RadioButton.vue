<template>
  <div class="form-element-wrapper">
    <label :style="{ ['margin' + margin]: 'auto' }">
      <input
        type="radio"
        :name="properties.text.name"
        :style="{
          width: properties.box.size + 'px',
          height: properties.box.size + 'px',
        }"
        :value="properties.text.value"
      />
      <span
        :style="{
          color: properties.text.inheritColor
            ? layoutSettings.color
            : properties.text.color,
          'font-size': properties.text.inheritSize
            ? layoutSettings.fontSize + 'px'
            : properties.text.size + 'px',
          'font-weight': properties.text.weight,
          'font-family': properties.general.fontFamily,
        }"
        >{{ properties.text.value }}</span
      >
    </label>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    margin() {
      if (this.properties.spacing.align === "left") {
        return "-right";
      } else if (this.properties.spacing.align === "right") {
        return "-left";
      } else return "";
    },
  },
};
</script>
