<template>
  <div
    class="form-element-wrapper"
    :style="{ 'background-color': properties.general.backgroundColor }"
  >
    <hr
      :style="{
        'border-top-width': properties.general.size + 'px',
        'border-top-style': properties.general.style,
        'border-top-color': properties.general.color,
        width: properties.spacing.width + '%',
        [margin]: 'auto',
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  computed: {
    margin() {
      if (this.properties.spacing.align === "left") return "margin-right";
      else if (this.properties.spacing.align === "right") return "margin-left";
      return "margin";
    },
  },
};
</script>

<style></style>
