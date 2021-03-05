<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Button Purpose</div>
    <div class="property-adjust-wrapper">
      <a-select v-model="value" style="width: 100px" @change="handleChange">
        <a-select-option v-for="(purpose, index) in purposes" :key="index">
          {{ purpose.charAt(0).toUpperCase() + purpose.slice(1) }}
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
      purposes: ["submit", "next step", "previous step"],
      value: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.value =
      this.activeElement.properties.general.purpose.charAt(0).toUpperCase() +
      this.activeElement.properties.general.purpose.slice(1);
  },
  methods: {
    handleChange(value) {
      this.activeElement.properties.general.purpose = this.purposes[value];
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
  watch: {
    activeElement() {
      this.value =
        this.activeElement.properties.general.purpose.charAt(0).toUpperCase() +
        this.activeElement.properties.general.purpose.slice(1);
    },
  },
};
</script>

<style></style>
