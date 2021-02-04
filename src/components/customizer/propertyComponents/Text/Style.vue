<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Style</div>
    <div class="property-adjust-wrapper">
      <a-radio-group
        v-model="activeElement.properties.text.align"
        size="large"
        @change="handleChange"
      >
        <a-radio-button value="left">
          <a-icon type="bold" />
        </a-radio-button>
        <a-radio-button value="center">
          <a-icon type="italic" />
        </a-radio-button>
        <a-radio-button value="right">
          <a-icon type="underline" />
        </a-radio-button>
      </a-radio-group>
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
<style scoped>
.property-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
