<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color':
        properties.general.backgroundColor.indexOf('0)') !== -1
          ? layoutSettings.backgroundColor
          : properties.general.backgroundColor,
      margin:
        properties.spacing.topMargin +
        'px ' +
        properties.spacing.rightMargin +
        'px ' +
        properties.spacing.bottomMargin +
        'px ' +
        properties.spacing.leftMargin +
        'px ',
      color: properties.text.inheritColor
        ? layoutSettings.color
        : properties.text.color,
    }"
  >
    <p
      :style="{
        'font-size': properties.text.size + 'px',
        'text-align': properties.spacing.align,
        'font-weight': properties.text.weight,
        'font-family': properties.general.fontFamily,
        'font-style': properties.text.style,
        'text-decoration': properties.text.decoration,
      }"
    >
      {{ properties.text.value }}
    </p>
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
  },
};
</script>

<style scoped>
.form-element-wrapper {
  user-select: none;
}
</style>
