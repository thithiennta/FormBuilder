<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Border Radius</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="0"
        :max="50"
        v-model="activeElement.properties.border.radius"
        class="customizer-input-number"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange() {
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
  },
};
</script>

<style></style>
