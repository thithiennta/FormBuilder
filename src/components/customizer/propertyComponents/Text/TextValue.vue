<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">{{ activeElement.type }} Text</div>
    <div class="property-adjust-wrapper">
      <a-input
        ref="placeholder"
        v-model="value"
        :placeholder="'Simple ' + activeElement.type + ' Text'"
      >
        <a-icon slot="prefix" type="edit" />
        <a-tooltip slot="suffix" :title="'Text show on ' + activeElement.type">
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
    this.value = this.activeElement.properties.text.value;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.text.value = this.value;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 300),
  },
  methods: {
    emitEmpty() {
      this.$refs.placeholder.focus();
      this.activeElement.properties.text.value = "";
    },
  },
};
</script>

<style></style>
