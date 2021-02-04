<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Weight</div>
    <div class="property-adjust-wrapper">
      <a-select
        :default-value="activeElement.properties.text.weight"
        style="width: 70px"
        @change="handleChange"
      >
        <a-select-option v-for="(weight, index) in weights" :key="index">
          {{ weight }}
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
      weights: [400, 500, 600, 700],
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange(value) {
      this.activeElement.properties.text.weight = this.weights[value];
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
};
</script>

<style></style>
