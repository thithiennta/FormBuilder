<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Weight</div>
    <div class="property-adjust-wrapper">
      <a-select v-model="value" style="width: 70px" @change="handleChange">
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
      value: null,
    };
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  created() {
    this.value = this.layoutSettings.weight;
  },
  watch: {
    layoutSettings() {
      this.value = this.layoutSettings.weight;
    },
  },
  methods: {
    handleChange(value) {
      this.layoutSettings.weight = this.weights[value];
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
  },
};
</script>

<style></style>
