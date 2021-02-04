<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Align</div>
    <div class="property-adjust-wrapper">
      <a-radio-group
        v-model="activeElement.properties.spacing.align"
        size="large"
        @change="handleChange"
      >
        <a-radio-button value="left">
          <a-icon type="align-left" />
        </a-radio-button>
        <a-radio-button value="center">
          <a-icon type="align-center" />
        </a-radio-button>
        <a-radio-button value="right">
          <a-icon type="align-right" />
        </a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: "center",
    };
  },
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
