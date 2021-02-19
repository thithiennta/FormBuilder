<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Family</div>
    <div class="property-adjust-wrapper">
      <a-select
        :default-value="layoutSettings.fontFamily"
        style="width: 200px"
        @change="handleChange"
      >
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
    };
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  methods: {
    handleChange(value) {
      this.layoutSettings.fontFamily = this.styles[value];
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE LAYOUT PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
  },
};
</script>

<style></style>
