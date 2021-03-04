<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color': properties.general.backgroundColor,
      height: properties.spacing.height + 'px',
    }"
  ></div>
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
