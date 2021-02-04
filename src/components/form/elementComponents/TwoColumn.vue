<template>
  <div>
    <h1>Two Column</h1>
    <NestedElement />
  </div>
</template>

<script>
import NestedElement from "../NestedElement.vue";
export default {
  components: {
    NestedElement,
  },
  computed: {
    elements: {
      get() {
        return this.$store.state.formModule.elements;
      },
      set(value) {
        this.$store.dispatch("formModule/updateElements", value);
      },
    },
  },
};
</script>

<style></style>
