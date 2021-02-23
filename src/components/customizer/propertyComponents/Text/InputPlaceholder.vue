<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">{{ activeElement.type }} Placeholder</div>
    <div class="property-adjust-wrapper">
      <a-input
        ref="inputPlaceholder"
        v-model="value"
        :placeholder="'Sample ' + activeElement.type + ' Placeholder'"
        @change="handleChange"
      >
        <a-icon slot="prefix" type="edit" />
        <a-tooltip
          slot="suffix"
          :title="'Show when have no ' + activeElement.type + ' value'"
        >
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
    return {
      value: null,
    };
  },
  created() {
    this.value = this.activeElement.properties.text.placeholder;
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
      this.value = this.activeElement.properties.text.placeholder;
    },
  },
  methods: {
    emitEmpty() {
      this.$refs.inputPlaceholder.focus();
      this.activeElement.properties.text.placeholder = "";
    },
    handleChange() {
      this.activeElement.properties.text.placeholder = this.value;
    },
  },
};
</script>

<style></style>
