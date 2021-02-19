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
          'font-size': properties.text.size + 'px',
          color: properties.text.color,
          'font-weight': properties.text.weight,
          'font-family': properties.general.fontFamily,
        }"
        >{{ properties.text.value }}</span
      >
    </label>
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
      if (this.properties.spacing.align === "left") {
        return "-right";
      } else if (this.properties.spacing.align === "right") {
        return "-left";
      } else return "";
    },
  },
};
</script>
