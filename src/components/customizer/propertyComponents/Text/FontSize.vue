<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Size</div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="1"
        :max="100"
        v-model="value"
        class="customizer-input-number"
        @change="handleChange"
        :disabled="inheritCheck"
      />
      <div
        class="property-inherit"
        v-if="blackList.indexOf(activeElement.type) === -1"
      >
        <a-switch
          checked-children="Inherit"
          un-checked-children="Inherit"
          v-model="inheritCheck"
        />
      </div>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
const min = 1,
  max = 100;
export default {
  data() {
    return {
      value: null,
      inheritCheck: null,
      blackList: ["Title"],
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
    ...mapState("formModule", ["layoutSettings"]),
  },
  created() {
    this.value = this.activeElement.properties.text.size;
    this.inheritCheck = this.activeElement.properties.text.inheritSize;
  },
  watch: {
    value: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 300),
    inheritCheck(mewValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.text.inheritSize = this.inheritCheck;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    activeElement() {
      this.value = this.activeElement.properties.text.size;
      this.inheritCheck = this.activeElement.properties.text.inheritSize;
    },
  },
  methods: {
    handleChange() {
      if (this.value > max) {
        this.value = max;
      } else if (this.value === null || this.value === "" || this.value < min) {
        this.value = min;
      }
      this.activeElement.properties.text.size = this.value;
    },
  },
};
</script>

<style scoped>
.property-adjust-wrapper {
  display: flex;
  align-items: center;
}
.property-inherit {
  margin-left: 10px;
}
</style>
