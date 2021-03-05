<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Step Title</div>
    <div class="property-adjust-wrapper">
      <a-radio-group
        v-model="index"
        button-style="solid"
        @change="handleRadioChange"
      >
        <a-radio-button
          :value="i"
          v-for="(step, i) in layoutSettings.form.numberStep"
          :key="i"
        >
          {{ i + 1 }}
        </a-radio-button>
      </a-radio-group>
      <div class="property-wrapper">
        <a-input
          v-model="value"
          :placeholder="'Sample title'"
          @change="handleChange"
        >
          <a-icon slot="prefix" type="edit" />
          <a-tooltip slot="suffix" :title="'Title of each step'">
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </a-input>
      </div>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: null,
      value: null,
    };
  },
  created() {
    this.index = 0;
    this.value = this.activeElement.properties.text.titles[0];
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
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
      this.index = 0;
      this.value = this.activeElement.properties.text.titles[this.index];
    },
  },
  methods: {
    handleRadioChange() {
      this.value = this.activeElement.properties.text.titles[this.index];
    },
    handleChange() {
      let titles = [...this.activeElement.properties.text.titles];
      titles[this.index] = this.value;
      this.activeElement.properties.text.titles = titles;
    },
  },
};
</script>

<style></style>
