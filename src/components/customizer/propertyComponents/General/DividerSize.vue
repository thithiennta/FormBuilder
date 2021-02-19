<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Divider Size</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="1"
        :max="25"
        v-model="value"
        class="customizer-input-number"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
  data() {
    return {
      value: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  created() {
    this.value = this.activeElement.properties.general.size;
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 200),
    activeElement() {
      this.value = this.activeElement.properties.general.size;
    },
  },
  methods: {
    handleChange() {
      this.activeElement.properties.general.size =
        this.value > 25 ? 25 : this.value;
    },
  },
};
</script>

<style></style>
