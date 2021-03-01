<template>
  <div
    class="columns-wrapper"
    :style="{
      'background-color':
        properties.general.backgroundColor.indexOf('0)') !== -1
          ? layoutSettings.backgroundColor
          : properties.general.backgroundColor,
    }"
    :id="rowId + '-columns-wrapper'"
  >
    <div
      class="column-wrapper"
      :class="{ 'empty-nested-wrapper': isColumnEmpty(nestedElement) }"
      v-for="(nestedElement, index) in nestedElements"
      :key="index"
      :style="{
        width: properties.spacing['column' + (index + 1) + 'Width'] + '%',
      }"
      :id="rowId + '-col-' + (index + 1)"
    >
      <NestedElement
        :list="nestedElement"
        :class="{ 'empty-nested': isColumnEmpty(nestedElement) }"
        style="z-index: 995"
      />
      <div
        @mousedown="handleMouseDown"
        :id="rowId + '-col-' + (index + 1) + '-resize'"
        class="resize"
        v-if="
          index + 1 !== nestedElements.length && activeElement.rowId === rowId
        "
        :style="{
          left:
            'calc(' +
            properties.spacing['column' + (index + 1) + 'Width'] +
            '%' +
            ' - 2px)',
        }"
      ></div>
    </div>
  </div>
</template>
<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
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
    rowId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      colWrap: null,
      col1: null,
      m_pos: null,
      col1Width: null,
    };
  },
  mounted() {
    this.col1 = document.getElementById(this.rowId + "-col-1");
    this.colWrap = document.getElementById(this.rowId + "-columns-wrapper");
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", this.resize, false);
      },
      false
    );
  },
  created() {},
  methods: {
    isColumnEmpty(column) {
      return column.length === 0;
    },
    handleMouseDown(e) {
      e.preventDefault();
      this.m_pos = e.x;
      document.addEventListener("mousemove", this.resize, false);
    },
    resize(e) {
      const dx = this.m_pos - e.x;
      this.m_pos = e.x;
      let percent =
        ((parseInt(getComputedStyle(this.col1, "").width) - dx) /
          parseInt(getComputedStyle(this.colWrap, "").width)) *
        100;
      if (percent < 10) {
        percent = 10;
      }
      if (percent > 90) {
        percent = 90;
      }
      this.col1.style.width = percent + "%";
      this.col1Width = percent;
      this.activeElement.properties.spacing.column1Width = percent;
      this.activeElement.properties.spacing.column2Width = 100 - percent;
    },
  },
  watch: {
    col1Width: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 300),
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
  },
};
</script>

<style scoped>
.columns-wrapper {
  display: flex;
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
  font-size: 16px !important;
  color: #000000 !important;
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  font-family: "Open sans", sans-serif !important;
}
.column-wrapper > div.empty-nested {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: "Open sans", sans-serif !important;
}
.resize {
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  background-color: rgb(64, 186, 248);
  width: 5px;
  cursor: col-resize;
  height: calc(100% - 10px);
  z-index: 999;
}
</style>
