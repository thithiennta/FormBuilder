<template>
  <div
    class="form-element-wrapper"
    :style="{
      'background-color': properties.general.backgroundColor,
      height: properties.spacing.height + 'px',
    }"
  >
    <NormalStep :properties="properties" />
  </div>
</template>

<script>
import NormalStep from "./StepBar/NormalStep";
import { mapState } from "vuex";
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  components: { NormalStep },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
  },
};
</script>

<style scoped>
.form-element-wrapper {
  user-select: none;
}
</style>
