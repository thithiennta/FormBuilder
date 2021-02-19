<template>
  <div
    class="two-column-wrapper"
    :style="{ 'background-color': properties.general.backgroundColor }"
  >
    <div
      class="column-wrapper"
      v-for="(nestedElement, index) in nestedElements"
      :key="index"
      :style="{
        width: properties.spacing['column' + (index + 1) + 'Width'] + '%',
      }"
    >
      <OutputElement
        :formElement="el"
        v-for="el in nestedElement"
        :key="el.rowId"
      />
    </div>
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
