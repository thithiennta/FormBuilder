<template>
  <div class="form-element-wrapper">
    <p
      :style="{
        'font-size': properties.text.size + 'px',
        color: properties.text.color,
        'text-align': properties.spacing.align,
        'font-weight': properties.text.weight,
      }"
    >
      {{ properties.text.value }}
    </p>
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
};
</script>

<style scoped>
button {
  cursor: pointer;
  outline: none;
}
</style>
