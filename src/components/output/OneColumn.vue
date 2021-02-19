<template>
  <div class="column-wrapper">
    <OutputElement
      :formElement="el"
      v-for="el in nestedElements"
      :key="el.rowId"
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
    nestedElements: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style></style>
