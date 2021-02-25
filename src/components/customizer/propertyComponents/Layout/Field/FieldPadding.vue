<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Field Padding
    </div>
    <div class="property-adjust-wrapper">
      <a-input-number
        :min="0"
        :max="100"
        v-model="allSides"
        class="customizer-input-number"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
const min = 0,
  max = 100;
export default {
  data() {
    return {
      fullPadding: null,
      allSides: null,
      top: null,
      left: null,
      right: null,
      bottom: null,
    };
  },
  created() {
    this.allSides = this.layoutSettings.field.padding;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    allSides(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
  },
  methods: {
    handleChange() {
      if (this.allSides === null || this.allSides === "" || this.allSides < min)
        this.allSides = min;
      if (this.allSides > max) this.allSides = max;
      this.layoutSettings.field.padding = this.allSides;
    },
    debounceFunction: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      this.$store.dispatch("formModule/updateProperty");
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    }, 300),
  },
};
</script>
<style scoped>
.full-width-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.padding-item {
  width: 50%;
}
.padding-item:first-child {
  margin-bottom: 10px;
}
.padding-item:nth-child(even) {
  text-align: right;
}
.property-wrapper > .customizer-sub-title {
  position: relative;
  margin-bottom: 10px;
}
.setting-switch {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
.setting-switch > button {
  margin-left: 5px;
}
</style>
