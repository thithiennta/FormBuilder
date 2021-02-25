<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Options Direction</div>
    <div class="property-adjust-wrapper">
      <a-radio-group v-model="optionsDirection" button-style="solid">
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="horizontal">
          Horizontal
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      optionsDirection: null,
    };
  },
  created() {
    this.optionsDirection = this.activeElement.properties.option.optionsDirection;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    optionsDirection(newValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.option.optionsDirection = newValue;
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
};
</script>

<style></style>
