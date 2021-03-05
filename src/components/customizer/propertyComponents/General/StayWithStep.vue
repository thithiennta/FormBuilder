<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Stay With Step?</div>
    <a-checkbox v-model="isKeepWithStep"></a-checkbox>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isKeepWithStep: null,
    };
  },
  created() {
    this.isKeepWithStep = this.activeElement.properties.general.isKeepWithStep;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    isKeepWithStep(newValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.general.isKeepWithStep = this.isKeepWithStep;
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    activeElement() {
      this.isKeepWithStep = this.activeElement.properties.general.isKeepWithStep;
    },
  },
};
</script>
<style scoped>
.property-wrapper {
  display: flex;
}
.customizer-sub-title {
  margin-right: 10px;
}
</style>
