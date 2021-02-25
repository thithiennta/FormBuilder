<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Label Margin
    </div>
    <div class="full-width-wrapper">
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Top</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="layoutSettings.input.labelTopMargin"
            class="customizer-input-number"
            @change="handleChange($event, 'Top')"
          />
        </div>
      </div>
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Left</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="layoutSettings.input.labelLeftMargin"
            class="customizer-input-number"
            @change="handleChange($event, 'Left')"
          />
        </div>
      </div>
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Bottom</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="layoutSettings.input.labelBottomMargin"
            class="customizer-input-number"
            @change="handleChange($event, 'Bottom')"
          />
        </div>
      </div>
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Right</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="layoutSettings.input.labelRightMargin"
            class="customizer-input-number"
            @change="handleChange($event, 'Right')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
const min = 0,
  max = 100;
export default {
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    top() {
      return this.layoutSettings.input.labelTopMargin;
    },
    left() {
      return this.layoutSettings.input.labelLeftMargin;
    },
    right() {
      return this.layoutSettings.input.labelRightMargin;
    },
    bottom() {
      return this.layoutSettings.input.labelBottomMargin;
    },
  },
  watch: {
    top(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    left(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    right(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    bottom(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
  },
  methods: {
    handleChange(value, position) {
      if (value > max) {
        this.layoutSettings.input["label" + position + "Margin"] = max;
      } else if (value === null || value === "" || value < min) {
        this.layoutSettings.input["label" + position + "Margin"] = min;
      } else {
        this.layoutSettings.input["label" + position + "Margin"] = value;
      }
    },
    debounceFunction: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
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
