<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Require</div>
    <a-checkbox v-model="isRequire"></a-checkbox>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isRequire: null,
    };
  },
  created() {
    this.isRequire = this.activeElement.properties.general.isRequire;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    isRequire(newValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.general.isRequire = this.isRequire;
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    activeElement() {
      this.isRequire = this.activeElement.properties.general.isRequire;
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
