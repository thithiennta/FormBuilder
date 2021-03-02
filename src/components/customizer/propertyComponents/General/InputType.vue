<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Input Type</div>
    <div class="property-adjust-wrapper">
      <a-select v-model="value" style="width: 100px" @change="handleChange">
        <a-select-option v-for="(type, index) in types" :key="index">
          {{ type.charAt(0).toUpperCase() + type.slice(1) }}
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
      types: ["text", "email", "number", "tel", "password"],
      value: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.value =
      this.activeElement.properties.general.type.charAt(0).toUpperCase() +
      this.activeElement.properties.general.type.slice(1);
  },
  watch: {
    activeElement() {
      this.value =
        this.activeElement.properties.general.type.charAt(0).toUpperCase() +
        this.activeElement.properties.general.type.slice(1);
    },
  },
  methods: {
    handleChange(value) {
      this.activeElement.properties.general.type = this.types[value];
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
};
</script>

<style></style>
