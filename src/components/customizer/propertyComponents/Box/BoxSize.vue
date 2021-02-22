<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Box Size</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="5"
        :max="50"
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
  created() {
    this.value = this.activeElement.properties.box.size;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
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
      this.value = this.activeElement.properties.box.size;
    },
  },
  methods: {
    handleChange() {
      this.activeElement.properties.box.size =
        this.value > 50 ? 50 : this.value;
    },
  },
};
</script>

<style></style>
