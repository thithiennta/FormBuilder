<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Date Format</div>
    <div class="property-adjust-wrapper">
      <a-select
        v-model="value"
        style="width: fit-content"
        @change="handleChange"
      >
        <a-select-option v-for="(format, index) in formats" :key="index">
          {{ format }}
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
      formats: ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY/MM/DD"],
      value: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.value = this.activeElement.properties.option.dateFormat;
  },
  watch: {
    activeElement() {
      this.value = this.activeElement.properties.option.dateFormat;
    },
  },
  methods: {
    handleChange(value) {
      this.activeElement.properties.option.dateFormat = this.formats[value];
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
};
</script>

<style></style>
