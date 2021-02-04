<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">{{ activeElement.type }} Text</div>
    <div class="property-adjust-wrapper">
      <a-input
        ref="placeholder"
        v-model="activeElement.properties.text.value"
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
      this.$refs.placeholder.focus();
      this.activeElement.properties.text.value = "";
    },
  },
};
</script>

<style></style>
