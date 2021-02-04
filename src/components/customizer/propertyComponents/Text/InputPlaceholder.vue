<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">{{ activeElement.type }} Placeholder</div>
    <div class="property-adjust-wrapper">
      <a-input
        ref="inputPlaceholder"
        v-model="activeElement.properties.text.placeholder"
        :placeholder="'Sample ' + activeElement.type + ' Placeholder'"
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
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    emitEmpty() {
      this.$refs.inputPlaceholder.focus();
      this.activeElement.properties.text.placeholder = "";
    },
  },
};
</script>

<style></style>
