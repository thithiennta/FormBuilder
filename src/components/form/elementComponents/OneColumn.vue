<template>
  <div
    class="column-wrapper columns-wrapper"
    :class="{ 'empty-nested-wrapper': isEmpty }"
    :style="{
      'background-color':
        properties.general.backgroundColor.indexOf('0)') !== -1
          ? layoutSettings.backgroundColor
          : properties.general.backgroundColor,
    }"
  >
    <NestedElement
      :list="nestedElements"
      :class="{ 'empty-nested': isEmpty }"
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
    nestedElements: {
      required: true,
      type: Array,
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    isEmpty() {
      return this.nestedElements.length === 0;
    },
  },
};
</script>

<style scoped>
.column-wrapper.empty-nested-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  border: 1px dashed rgb(64, 186, 248);
  background-color: rgb(176, 231, 254) !important;
}
.empty-nested:empty::after {
  content: "Drag content here";
  position: absolute;
  font-size: 16px !important;
  color: #000000 !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.column-wrapper.empty-nested-wrapper p {
  text-align: center;
}
.column-wrapper > div.empty-nested {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: "Open sans", sans-serif !important;
}
.empty-nested {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: "Open sans", sans-serif !important;
}
</style>
