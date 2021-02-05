<template>
  <div
    class="four-column-wrapper"
    :style="{ 'background-color': properties.general.backgroundColor }"
  >
    <div
      class="column-wrapper"
      :class="{ 'empty-nested-wrapper': isColumnEmpty(nestedElement) }"
      v-for="(nestedElement, index) in nestedElements"
      :key="index"
    >
      <NestedElement
        :list="nestedElement"
        :class="{ 'empty-nested': isColumnEmpty(nestedElement) }"
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
      required: false,
      type: Array,
      default: null,
    },
  },
  methods: {
    isColumnEmpty(column) {
      return column.length === 0;
    },
  },
};
</script>

<style scoped>
.four-column-wrapper {
  display: flex;
}
.four-column-wrapper .column-wrapper {
  width: calc(100% / 4);
}
.column-wrapper.empty-nested-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  border: 1px dashed rgb(64, 186, 248);
  background-color: rgb(176, 231, 254);
}
.empty-nested:empty::after {
  content: "Drag content here";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.column-wrapper.empty-nested-wrapper p {
  text-align: center;
}
.empty-nested {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
