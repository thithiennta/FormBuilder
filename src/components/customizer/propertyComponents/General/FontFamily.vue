<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Family</div>
    <div class="property-adjust-wrapper">
      <a-select
        :default-value="activeElement.properties.general.fontFamily"
        style="width: 200px"
        @change="handleChange"
      >
        <a-select-option v-for="(style, index) in styles" :key="index">
          {{ style }}
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
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange(value) {
      this.activeElement.properties.general.fontFamily = this.styles[value];
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
};
</script>

<style></style>
