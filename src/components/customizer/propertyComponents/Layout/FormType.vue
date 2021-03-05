<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Form Type</div>
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
      types: ["normal", "multi step"],
      value: null,
    };
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  created() {
    this.value =
      this.layoutSettings.form.type.charAt(0).toUpperCase() +
      this.layoutSettings.form.type.slice(1);
  },
  watch: {
    activeElement() {
      this.value =
        this.layoutSettings.form.type.charAt(0).toUpperCase() +
        this.layoutSettings.form.type.slice(1);
    },
  },
  methods: {
    handleChange(value) {
      this.layoutSettings.form.type = this.types[value];
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
