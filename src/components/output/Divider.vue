<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color':
        properties.general.backgroundColor.indexOf('0)') !== -1
          ? layoutSettings.backgroundColor
          : properties.general.backgroundColor,
    }"
  >
    <hr
      :style="{
        'border-top-width': properties.general.size + 'px',
        'border-bottom': 0,
        'border-left': 0,
        'border-right': 0,
        'border-top-style': properties.general.style,
        'border-top-color': properties.general.color,
        width: properties.spacing.width + '%',
        [margin]: 'auto',
      }"
    />
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
      if (this.properties.spacing.align === "left") return "margin-right";
      else if (this.properties.spacing.align === "right") return "margin-left";
      return "margin";
    },
  },
};
</script>
