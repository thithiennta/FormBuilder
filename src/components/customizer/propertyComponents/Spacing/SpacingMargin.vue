<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Margin
    </div>
    <div class="full-width-wrapper" v-if="true">
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Top</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="top"
            class="customizer-input-number"
            @change="handleChange"
          />
        </div>
      </div>
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Left</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="left"
            class="customizer-input-number"
            @change="handleChange"
          />
        </div>
      </div>
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Bottom</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="bottom"
            class="customizer-input-number"
            @change="handleChange"
          />
        </div>
      </div>
      <div class="padding-item">
        <div class="customizer-sub-sub-title">Right</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="100"
            v-model="right"
            class="customizer-input-number"
            @change="handleChange"
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
      fullMargin: null,
      allSides: null,
      top: null,
      left: null,
      right: null,
      bottom: null,
    };
  },
  created() {
    // this.fullMargin = this.activeElement.properties.spacing.fullMargin;
    this.fullMargin = true;
    this.allSides = this.activeElement.properties.spacing.allSidesMargin;
    this.top = this.activeElement.properties.spacing.topMargin;
    this.left = this.activeElement.properties.spacing.leftMargin;
    this.right = this.activeElement.properties.spacing.rightMargin;
    this.bottom = this.activeElement.properties.spacing.bottomMargin;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    fullWidth(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    allSides(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
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
      this.fullMargin = this.activeElement.properties.spacing.fullMargin;
      this.allSides = this.activeElement.properties.spacing.allSidesMargin;
      this.top = this.activeElement.properties.spacing.topMargin;
      this.left = this.activeElement.properties.spacing.leftMargin;
      this.right = this.activeElement.properties.spacing.rightMargin;
      this.bottom = this.activeElement.properties.spacing.bottomMargin;
    },
  },
  methods: {
    handleChange() {
      if (this.top === null || this.top === "" || this.top < min)
        this.top = min;
      if (this.left === null || this.left === "" || this.left < min)
        this.left = min;
      if (this.right === null || this.right === "" || this.right < min)
        this.right = min;
      if (this.bottom === null || this.bottom === "" || this.bottom < min)
        this.bottom = min;
      if (this.allSides === null || this.allSides === "" || this.allSides < min)
        this.allSides = min;
      if (this.top > max) this.top = max;
      if (this.left > max) this.left = max;
      if (this.right > max) this.right = max;
      if (this.bottom > max) this.bottom = max;
      if (this.allSides > max) this.allSides = max;
      this.activeElement.properties.spacing = {
        ...this.activeElement.properties.spacing,
        fullMargin: this.fullMargin,
        topMargin: this.top,
        leftMargin: this.left,
        rightMargin: this.right,
        bottomMargin: this.bottom,
        allSidesMargin: this.allSides,
      };
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
</style>
