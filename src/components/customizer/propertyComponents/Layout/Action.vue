<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Action</div>
    <div class="property-adjust-wrapper">
      <a-input
        ref="action"
        v-model="value"
        placeholder="/homepage"
        @change="handleChange"
      >
        <a-icon slot="prefix" type="edit" />
        <a-tooltip slot="suffix" title="Action of your form">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
  data() {
    return { value: null };
  },
  created() {
    this.value = this.layoutSettings.form.action;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    }, 300),
    layoutSettings() {
      this.value = this.layoutSettings.form.action;
    },
  },
  methods: {
    emitEmpty() {
      this.$refs.action.focus();
      this.layoutSettings.action = "";
    },
    handleChange() {
      this.layoutSettings.action = this.value;
    },
  },
};
</script>

<style></style>
