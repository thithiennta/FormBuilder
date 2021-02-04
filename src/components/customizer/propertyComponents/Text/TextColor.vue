<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Text Color</div>
    <div class="property-adjust-wrapper">
      <div class="show-color-wrapper" @click="handleShowSketch">
        <div
          class="color-block"
          :style="{ 'background-color': activeElement.properties.text.color }"
        ></div>
        <div class="text-block">Choose Color</div>
      </div>
      <Sketch
        id="text-sketch"
        v-model="activeElement.properties.text.color"
        v-show="showSketch"
        class="sketch-wrapper"
        @input="updateValue"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Sketch } from "vue-color";
export default {
  components: {
    Sketch,
  },
  data() {
    return {
      value: 14,
      showSketch: false,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  mounted() {
    document.addEventListener("click", (e) => {
      var colorPicker = document.getElementById("text-sketch");
      if (colorPicker === null) return;
      if (!colorPicker.contains(e.target)) {
        this.showSketch = false;
      }
    });
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
    updateValue(value) {
      this.activeElement.properties.text.color = value.hex;
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
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
  position: absolute;
  margin-top: 5px;
  z-index: 999;
}
</style>
