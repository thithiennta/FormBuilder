<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">{{ activeElement.type }} Name</div>
    <div class="property-adjust-wrapper">
      <a-input
        ref="inputName"
        v-model="activeElement.properties.text.name"
        :placeholder="'Sample ' + activeElement.type + ' Name'"
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
      this.$refs.inputName.focus();
      this.activeElement.properties.text.name = "";
    },
  },
};
</script>

<style></style>
