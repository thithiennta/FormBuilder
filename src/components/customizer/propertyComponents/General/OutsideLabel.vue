<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Label</div>
    <div class="property-adjust-wrapper">
      <a-radio-group v-model="isOutsideLabel" button-style="solid">
        <a-radio-button :value="true">
          Outside
        </a-radio-button>
        <a-radio-button :value="false">
          Inside
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
      isOutsideLabel: null,
    };
  },
  created() {
    this.isOutsideLabel = this.activeElement.properties.general.label.isOutsideLabel;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    isOutsideLabel(newValue, oldValue) {
      if (oldValue === null) return;
      if (newValue === false)
        this.activeElement.properties.text.placeholder = this.activeElement.properties.text.fieldName;
      else this.activeElement.properties.text.placeholder = "";
      this.activeElement.properties.general.label.isOutsideLabel = newValue;
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    activeElement() {
      this.isOutsideLabel = this.activeElement.properties.general.label.isOutsideLabel;
    },
  },
};
</script>

<style scoped></style>
