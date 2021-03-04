<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Require</div>
    <a-checkbox v-model="isRequired"></a-checkbox>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isRequired: null,
    };
  },
  created() {
    this.isRequired = this.activeElement.properties.general.isRequired;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    isRequire(newValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.general.isRequired = this.isRequired;
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    activeElement() {
      this.isRequired = this.activeElement.properties.general.isRequired;
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
