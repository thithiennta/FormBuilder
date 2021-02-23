<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Border Color</div>
    <div class="property-adjust-wrapper">
      <div class="show-color-wrapper" @click="handleShowSketch">
        <div class="color-block" :style="{ 'background-color': color }"></div>
        <div class="text-block">Choose Color</div>
      </div>
      <Sketch
        id="border-sketch"
        v-model="color"
        v-show="showSketch"
        class="sketch-wrapper"
        @input="updateValue"
      />
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
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.color = this.activeElement.properties.border.color;
  },
  mounted() {
    document.addEventListener("click", (e) => {
      var colorPicker = document.getElementById("border-sketch");
      if (colorPicker === null) return;
      if (!colorPicker.contains(e.target)) {
        this.showSketch = false;
      }
    });
  },
  watch: {
    color: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // // This to ADD PREVIOUS STATE and CLONE STATE
      // this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 200),
    activeElement() {
      this.color = this.activeElement.properties.border.color;
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
      this.activeElement.properties.border.color = this.color;
    },
  },
};
</script>

<style scoped>
.property-adjust-wrapper {
}
.show-color-wrapper {
  display: flex;
  align-items: center;
  width: fit-content;
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
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
  margin-top: 5px;
  position: absolute;
  z-index: 999;
}
</style>
