<template>
  <div id="form-side" class="form-side-wrapper">
    <div class="form-control">
      <div class="undo-redo-control form-control-item">
        <a-tooltip placement="bottom" class="item-wrapper" @click="handleUndo">
          <template slot="title">
            <span>Undo</span>
          </template>
          <a-icon type="undo" />
        </a-tooltip>
        <a-tooltip placement="bottom" class="item-wrapper" @click="handleRedo">
          <template slot="title">
            <span>Redo</span>
          </template>
          <a-icon type="redo" />
        </a-tooltip>
      </div>
      <div class="preview-control form-control-item">
        <a-tooltip
          placement="bottom"
          class="item-wrapper"
          @click="handlePreview"
        >
          <template slot="title">
            <span>Preview</span>
          </template>
          <a-icon type="eye" />
        </a-tooltip>
      </div>
      <div class="viewport-control form-control-item">
        <a-tooltip placement="bottom" class="item-wrapper active">
          <template slot="title">
            <span>Desktop</span>
          </template>
          <a-icon type="desktop" />
        </a-tooltip>
        <a-tooltip placement="bottom" class="item-wrapper">
          <template slot="title">
            <span>Mobile</span>
          </template>
          <a-icon type="tablet" />
        </a-tooltip>
      </div>
    </div>
    <vuescroll :ops="options" class="customizer-body-scroll">
      <div class="form-side-container">
        <div
          class="form-content"
          :style="{
            'background-color': layoutSettings.backgroundColor,
            'font-family': layoutSettings.fontFamily,
            'font-size': layoutSettings.fontSize + 'px',
            color: layoutSettings.color,
          }"
        >
          <NestedElement v-model="elements" />
        </div>
      </div>
    </vuescroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
import vuescroll from "vuescroll";
export default {
  components: {
    vuescroll,
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    elements: {
      get() {
        return this.$store.state.formModule.elements;
      },
      set(value) {
        this.$store.dispatch("formModule/updateElements", value);
      },
    },
    canUndo() {
      return this.$store.state.formModule.previousStates.length !== 0;
    },
    canRedo() {
      return this.$store.state.formModule.nextStates.length !== 0;
    },
  },
  data() {
    return {
      options: {
        rail: {
          size: "6px",
        },
        bar: {
          showDelay: 400,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#585959",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0,
          size: "4px",
          disable: false,
        },
      },
    };
  },
  methods: {
    handleUndo() {
      if (this.canUndo) {
        this.$store.dispatch("customizerModule/unselectElement");
        this.$store.dispatch("formModule/undoAction");
      }
    },
    handleRedo() {
      if (this.canRedo) {
        this.$store.dispatch("formModule/redoAction");
      }
    },
    handlePreview() {
      this.$emit("showPreview");
    },
    handleStopPro(e) {
      e.stopPropagation();
    },
  },
};
</script>
<style scoped>
.form-control {
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  background-color: rgb(77, 76, 76);
  width: fit-content;
  border-radius: 5px;
}
.form-control-item {
  display: flex;
  padding: 10px;
  border-right: 1px solid rgb(165, 165, 165);
}
.form-control-item:last-child {
  border-right: none;
}
.form-control-item i.active {
  color: rgb(234, 232, 232);
}
.undo-redo-control .item-wrapper:first-child {
  transform: rotate(90deg);
}
.undo-redo-control .item-wrapper:nth-child(2) {
  transform: rotate(-90deg);
}
.form-control-item .item-wrapper {
  margin-right: 10px;
}
.form-control-item .item-wrapper:last-child {
  margin-right: 0;
}
.form-control-item i {
  font-size: 25px;
  color: rgb(155, 155, 155);
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}
.form-control-item i:hover {
  color: white;
}
.item-wrapper {
  position: relative;
}
.item-tooltip {
  opacity: 0;
  position: absolute;
  top: calc(100% + 15px);
  right: 0;
  padding: 7px 15px;
  background-color: rgb(78, 78, 78);
  color: white;
  border-radius: 4px;
  z-index: 999;
  transition: opacity 0.3s ease-in;
}
.item-tooltip.show {
  opacity: 1;
}
.customizer-body-scroll {
  position: relative !important;
  height: 80% !important;
  top: 50%;
  transform: translateY(-50%);
}
</style>
<style>
.form-side-wrapper {
  position: relative;
  height: 100vh;
  background-color: white;
  background-image: linear-gradient(
      45deg,
      rgb(247, 247, 247) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg, rgb(247, 247, 247) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(247, 247, 247) 75%),
    linear-gradient(-45deg, transparent 75%, rgb(247, 247, 247) 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 0px 10px, 10px -10px, -10px 0px;
}
.form-side-container {
  position: relative;
  height: 100%;
  max-width: 1000px;
  width: 90%;
  background-color: white;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
.form-element-container {
  max-width: 600px;
  margin: auto;
}
.empty-nested:empty::after {
  text-align: center;
}
.form-content > div > div > .element-big-wrapper {
  /* padding: 0 15px; */
}
</style>
