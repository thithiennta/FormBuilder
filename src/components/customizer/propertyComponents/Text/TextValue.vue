<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">{{ activeElement.type }} Text</div>
    <div class="property-adjust-wrapper">
      <a-textarea
        ref="placeholder"
        v-model="value"
        :placeholder="'Simple ' + activeElement.type + ' Text'"
        @change="handleChange"
      >
        <a-icon slot="prefix" type="edit" />
        <a-tooltip slot="suffix" :title="'Text show on ' + activeElement.type">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-textarea>
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
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 300),
    activeElement() {
      this.value = this.activeElement.properties.text.value;
    },
  },
  methods: {
    emitEmpty() {
      this.$refs.placeholder.focus();
      this.activeElement.properties.text.value = "";
    },
    handleChange() {
      this.activeElement.properties.text.value = this.value;
    },
  },
};
</script>

<style></style>
