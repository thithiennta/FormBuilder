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
        border:
          (hoverElement.rowId && hoverElement.rowId === rowId) ||
          activeElement.rowId === rowId
            ? '1px dashed rgb(113, 203, 244)'
            : '',
      }"
      :id="rowId + '-col-' + (index + 1)"
    >
      <NestedElement
        :list="nestedElement"
        :class="{ 'empty-nested': isColumnEmpty(nestedElement) }"
      />
      <div
        @mousedown="handleMouseDown($event, rowId, index + 1)"
        @click="handleResizeClick"
        @mouseup="handleMouseUp"
        :id="rowId + '-col-' + (index + 1) + '-resize'"
        class="resize"
        v-if="index + 1 !== nestedElements.length"
        :style="{
          left: left(index + 1),
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
      col2: null,
      m_pos: null,
      col1Width: null,
      col2Width: null,
      currentIndex: null,
    };
  },
  mounted() {
    this.col1 = document.getElementById(this.rowId + "-col-1");
    this.col2 = document.getElementById(this.rowId + "-col-2");
    this.colWrap = document.getElementById(this.rowId + "-columns-wrapper");
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", this.resize, false);
      },
      false
    );
  },
  methods: {
    findRow(rowId) {
      return this.$store.state.formModule.elements.find(
        (e) => e.rowId === rowId
      );
    },
    left(index) {
      if (index === 1)
        return "calc(" + this.properties.spacing.column1Width + "% - 2px)";
      if (index === 2)
        return (
          "calc(" +
          (this.properties.spacing.column1Width +
            this.properties.spacing.column2Width) +
          "% - 2px)"
        );
    },
    isColumnEmpty(column) {
      return column.length === 0;
    },
    handleMouseDown(e, rowId, index) {
      e.preventDefault();
      if (
        this.activeElement.rowId === undefined ||
        this.activeElement.rowId !== rowId
      ) {
        let row = this.findRow(rowId);
        this.$store.dispatch("customizerModule/hoverElement", row);
      }
      this.currentIndex = index;
      this.m_pos = e.x;
      document.addEventListener("mousemove", this.resize, false);
    },
    handleResizeClick(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    handleMouseUp() {
      this.$store.dispatch("customizerModule/unhoverElement");
    },
    resize(e) {
      let remainingWidth;
      if (this.currentIndex === 1) {
        remainingWidth =
          100 -
          (this.activeElement.rowId
            ? this.activeElement.properties.spacing.column3Width
            : this.hoverElement.properties.spacing.column3Width);
      } else {
        remainingWidth =
          100 -
          (this.activeElement.rowId
            ? this.activeElement.properties.spacing.column1Width
            : this.hoverElement.properties.spacing.column1Width);
      }
      const dx = this.m_pos - e.x;
      this.m_pos = e.x;
      let percent =
        ((parseInt(
          getComputedStyle(this["col" + this.currentIndex], "").width
        ) -
          dx) /
          parseInt(getComputedStyle(this.colWrap, "").width)) *
        100;
      if (percent < 10) {
        percent = 10;
      }
      if (percent > remainingWidth - 10) {
        percent = remainingWidth - 10;
      }
      this["col" + this.currentIndex].style.width = percent + "%";
      this["col" + this.currentIndex + "Width"] = percent;

      if (this.hoverElement.rowId) {
        this.hoverElement.properties.spacing[
          "column" + this.currentIndex + "Width"
        ] = percent;
        this.hoverElement.properties.spacing[
          "column" + (this.currentIndex + 1) + "Width"
        ] = remainingWidth - percent;
      } else if (this.activeElement.rowId) {
        this.activeElement.properties.spacing[
          "column" + this.currentIndex + "Width"
        ] = percent;
        this.activeElement.properties.spacing[
          "column" + (this.currentIndex + 1) + "Width"
        ] = remainingWidth - percent;
      }
    },
  },
  watch: {
    col1Width: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      if (this.hoverElement.rowId) {
        // This to UPDATE PROPERTY
        this.$store.dispatch(
          "customizerModule/changeColumnWidth",
          this.hoverElement
        );
      } else if (this.activeElement.rowId) {
        this.$store.dispatch(
          "customizerModule/changePropertyValue",
          this.activeElement
        );
      }
    }, 300),
    col2Width: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      if (this.hoverElement.rowId) {
        // This to UPDATE PROPERTY
        this.$store.dispatch(
          "customizerModule/changeColumnWidth",
          this.hoverElement
        );
      } else if (this.activeElement.rowId) {
        this.$store.dispatch(
          "customizerModule/changePropertyValue",
          this.activeElement
        );
      }
    }, 300),
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement", "hoverElement"]),
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
  font-family: "Open sans", sans-serif !important;
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
  opacity: 1;
  z-index: 999;
  opacity: 0;
}
.resize:hover {
  opacity: 1;
}
</style>
