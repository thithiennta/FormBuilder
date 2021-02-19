<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Family</div>
    <div class="property-adjust-wrapper">
      <a-select
        v-model="value"
        style="width: 200px"
        @change="handleChange"
        :style="{ 'font-family': value }"
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
      value: null,
    };
  },
  created() {
    this.value = this.layoutSettings.fontFamily;
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
  watch: {
    layoutSettings() {
      this.value = this.layoutSettings.fontFamily;
    },
  },
};
</script>

<style></style>
