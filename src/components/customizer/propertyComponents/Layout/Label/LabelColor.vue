<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Label Color</div>
    <div class="property-adjust-wrapper">
      <div
        class="show-color-wrapper"
        @click="handleShowSketch"
        :class="{ disable: inheritCheck }"
      >
        <div
          class="color-block"
          :style="{
            'background-color': layoutSettings.label.labelInheritColor
              ? layoutSettings.color
              : color,
          }"
        ></div>
        <div class="text-block">Choose Color</div>
      </div>
      <Sketch
        id="label-sketch"
        v-model="color"
        v-show="showSketch"
        class="sketch-wrapper"
        @input="updateValue"
      />
      <div class="property-inherit">
        <a-switch
          checked-children="Inherit"
          un-checked-children="Inherit"
          v-model="inheritCheck"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
import { Sketch } from "vue-color";
export default {
  components: {
    Sketch,
  },
  data() {
    return {
      color: null,
      showSketch: false,
      inheritCheck: null,
      check: null,
    };
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  created() {
    this.color = this.layoutSettings.label.labelColor;
    this.inheritCheck = this.layoutSettings.label.labelInheritColor;
  },
  mounted() {
    document.addEventListener("click", (e) => {
      var colorPicker = document.getElementById("label-sketch");
      if (colorPicker === null) return;
      if (!colorPicker.contains(e.target)) {
        this.showSketch = false;
      }
    });
  },
  watch: {
    color: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    }, 200),
    inheritCheck(newValue, oldValue) {
      if (oldValue === null) return;
      this.layoutSettings.label.labelInheritColor = newValue;
      if (newValue === true) this.color = this.layoutSettings.color;
      else this.color = this.layoutSettings.label.labelColor;
    },
    layoutSettings() {
      this.color = this.layoutSettings.label.labelColor;
      this.inheritCheck = this.layoutSettings.label.labelInheritColor;
    },
  },
  methods: {
    handleShowSketch(e) {
      e.stopPropagation();
      var sketchs = document.getElementsByClassName("sketch-wrapper");
      sketchs.forEach((sketch) => {
        sketch.style.display = "none";
      });
      this.showSketch = !this.showSketch;
    },
    updateValue({ rgba }) {
      this.color = `rgba(${rgba.r},${rgba.g}, ${rgba.b}, ${rgba.a})`;
      this.layoutSettings.label.labelColor = this.color;
    },
  },
};
</script>

<style scoped>
.property-adjust-wrapper {
  display: flex;
}
.property-inherit {
  margin-left: 10px;
}
.show-color-wrapper {
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
}
.show-color-wrapper.disable {
  pointer-events: none;
  filter: contrast(0.4);
}
.color-block {
  width: 25px;
  height: 25px;
  border-radius: 5px;
}
.text-block {
  padding: 0 15px 0 5px;
}
.sketch-wrapper {
  margin-top: 30px;
  position: absolute;
  z-index: 999;
}
</style>
