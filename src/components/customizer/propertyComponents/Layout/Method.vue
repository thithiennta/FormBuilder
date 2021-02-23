<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Method</div>
    <div class="property-adjust-wrapper">
      <a-select v-model="value" style="width: 90px" @change="handleChange">
        <a-select-option v-for="(method, index) in methods" :key="index">
          {{ method }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return { methods: ["GET", "POST"], value: null };
  },
  created() {
    this.value = this.layoutSettings.form.method;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    layoutSettings() {
      this.value = this.layoutSettings.form.method;
    },
  },
  methods: {
    emitEmpty() {
      this.$refs.action.focus();
      this.layoutSettings.form.method = "";
    },
    handleChange() {
      this.layoutSettings.form.method = this.value;
      this.$store.dispatch("formModule/updateProperty");
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
  },
};
</script>

<style></style>
