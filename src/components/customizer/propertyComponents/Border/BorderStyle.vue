<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Border Style</div>
    <div class="property-adjust-wrapper">
      <a-select v-model="value" style="width: 100px" @change="handleChange">
        <a-select-option v-for="(style, index) in styles" :key="index">
          {{ style.charAt(0).toUpperCase() + style.slice(1) }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      styles: ["solid", "dotted", "dashed", "double", "groove"],
      value: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.value =
      this.activeElement.properties.border.style.charAt(0).toUpperCase() +
      this.activeElement.properties.border.style.slice(1);
  },
  methods: {
    handleChange(value) {
      this.activeElement.properties.border.style = this.styles[value];
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
  watch: {
    activeElement() {
      this.value =
        this.activeElement.properties.border.style.charAt(0).toUpperCase() +
        this.activeElement.properties.border.style.slice(1);
    },
  },
};
</script>

<style></style>
