<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Text Color</div>
    <div class="property-adjust-wrapper">
      <div
        class="show-color-wrapper"
        @click="handleShowSketch"
        :class="{ disable: inheritCheck }"
      >
        <div class="color-block" :style="{ 'background-color': color }"></div>
        <div class="text-block">Choose Color</div>
      </div>
      <Sketch
        id="text-sketch"
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
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.color = this.activeElement.properties.text.color;
    this.inheritCheck = this.activeElement.properties.text.inheritColor;
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
  watch: {
    color: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 200),
    inheritCheck(mewValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.text.inheritColor = this.inheritCheck;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    activeElement() {
      this.color = this.activeElement.properties.text.color;
      this.inheritCheck = this.activeElement.properties.text.inheritColor;
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
    updateValue(value) {
      this.color = value.hex;
      this.activeElement.properties.text.color = this.color;
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
  position: absolute;
  margin-top: 30px;
  z-index: 999;
}
</style>
