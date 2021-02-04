<template>
  <div class="form-element-wrapper">
    <p v-if="isEmpty">Drag content here</p>
    <NestedElement :list="nestedElements" />
  </div>
</template>
<script>
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
    nestedElements: {
      required: false,
      type: Array,
      default: null,
    },
  },
  computed: {
    isEmpty() {
      return this.nestedElements.length === 0;
    },
  },
};
</script>

<style scoped>
.form-element-wrapper {
  min-height: 100px;
  border: 1px dashed rgb(64, 186, 248);
  background-color: rgb(176, 231, 254);
}
</style>
