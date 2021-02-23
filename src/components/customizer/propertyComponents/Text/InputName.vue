<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">{{ activeElement.type }} Name</div>
    <div class="property-adjust-wrapper">
      <a-input
        ref="inputName"
        v-model="value"
        :placeholder="'Sample ' + activeElement.type + ' Name'"
        @change="handleChange"
      >
        <a-icon slot="prefix" type="edit" />
        <a-tooltip
          slot="suffix"
          :title="'Name of ' + activeElement.type + ' used in Form'"
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
    this.value = this.activeElement.properties.text.name;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.text.name = this.value;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 300),
    activeElement() {
      this.value = this.activeElement.properties.text.name;
    },
  },
  methods: {
    emitEmpty() {
      this.$refs.inputName.focus();
      this.activeElement.properties.text.name = "";
    },
    handleChange() {},
  },
};
</script>

<style></style>
