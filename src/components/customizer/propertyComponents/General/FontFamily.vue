<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Family</div>
    <div class="property-adjust-wrapper">
      <a-select v-model="value" style="width: 200px" @change="handleChange">
        <a-select-option v-for="(style, index) in styles" :key="index">
          <span :style="{ 'font-family': style }">{{ style }}</span>
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
import defaultArrays from "../../../../utils/defaultArrays";
import { mapState } from "vuex";
export default {
  data() {
    return {
      styles: defaultArrays.fontFamily,
      value: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.value = this.activeElement.properties.general.fontFamily;
  },
  methods: {
    handleChange(value) {
      this.activeElement.properties.general.fontFamily = this.styles[value];
      this.$store.dispatch("formModule/updateProperty");
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
  watch: {
    activeElement() {
      this.value = this.activeElement.properties.general.fontFamily;
    },
  },
};
</script>

<style></style>
