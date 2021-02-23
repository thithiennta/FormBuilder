<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Label Margin
      <div class="property-inherit">
        <a-switch
          checked-children="Inherit"
          un-checked-children="Inherit"
          v-model="inheritCheck"
        />
      </div>
    </div>
    <div class="full-width-wrapper" v-if="!inheritCheck">
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Top</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="activeElement.properties.general.label.labelTopMargin"
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
            v-model="activeElement.properties.general.label.labelLeftMargin"
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
            v-model="activeElement.properties.general.label.labelBottomMargin"
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
            v-model="activeElement.properties.general.label.labelRightMargin"
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
  data() {
    return {
      inheritCheck: null,
    };
  },
  created() {
    this.inheritCheck = this.activeElement.properties.general.label.inheritLabelMargin;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
    top() {
      return this.activeElement.properties.general.label.labelTopMargin;
    },
    left() {
      return this.activeElement.properties.general.label.labelLeftMargin;
    },
    right() {
      return this.activeElement.properties.general.label.labelRightMargin;
    },
    bottom() {
      return this.activeElement.properties.general.label.labelBottomMargin;
    },
  },
  watch: {
    inheritCheck(mewValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.general.label.inheritLabelMargin = this.inheritCheck;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
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
    activeElement() {
      this.inheritCheck = this.activeElement.properties.general.label.inheritLabelMargin;
    },
  },
  methods: {
    handleChange(value, position) {
      if (value > max) {
        this.activeElement.properties.general.label[
          "label" + position + "Margin"
        ] = max;
      } else if (value === null || value === "" || value < min) {
        this.activeElement.properties.general.label[
          "label" + position + "Margin"
        ] = min;
      } else {
        this.activeElement.properties.general.label[
          "label" + position + "Margin"
        ] = value;
      }
    },
    debounceFunction: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
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
.customizer-sub-title {
  display: flex;
  justify-content: space-between;
}
</style>
