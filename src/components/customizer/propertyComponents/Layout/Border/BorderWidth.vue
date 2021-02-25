<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Width
      <div class="setting-switch">
        More Options
        <a-switch v-model="fullWidth" @change="handleChange">
          <a-icon slot="checkedChildren" type="check" />
          <a-icon slot="unCheckedChildren" type="close" />
        </a-switch>
      </div>
    </div>
    <transition name="fade">
      <div class="all-slides-wrapper" v-if="!fullWidth">
        <div class="customizer-sub-sub-title">All Sides</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="0"
            :max="25"
            v-model="allSides"
            class="customizer-input-number"
            @change="handleChange"
          />
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="full-width-wrapper" v-if="fullWidth">
        <div class="width-item">
          <div class="customizer-sub-sub-title">Top</div>
          <div class="property-adjust-wrapper">
            <a-input-number
              :min="0"
              :max="25"
              v-model="top"
              class="customizer-input-number"
              @change="handleChange"
            />
          </div>
        </div>
        <div class="width-item">
          <div class="customizer-sub-sub-title">Left</div>
          <div class="property-adjust-wrapper">
            <a-input-number
              :min="0"
              :max="25"
              v-model="left"
              class="customizer-input-number"
              @change="handleChange"
            />
          </div>
        </div>
        <div class="width-item">
          <div class="customizer-sub-sub-title">Bottom</div>
          <div class="property-adjust-wrapper">
            <a-input-number
              :min="0"
              :max="25"
              v-model="bottom"
              class="customizer-input-number"
              @change="handleChange"
            />
          </div>
        </div>
        <div class="width-item">
          <div class="customizer-sub-sub-title">Right</div>
          <div class="property-adjust-wrapper">
            <a-input-number
              :min="0"
              :max="25"
              v-model="right"
              class="customizer-input-number"
              @change="handleChange"
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
const min = 0,
  max = 25;
export default {
  data() {
    return {
      fullWidth: null,
      allSides: null,
      top: null,
      left: null,
      right: null,
      bottom: null,
    };
  },
  created() {
    this.fullWidth = this.layoutSettings.border.fullWidth;
    this.allSides = this.layoutSettings.border.allSidesWidth;
    this.top = this.layoutSettings.border.topWidth;
    this.left = this.layoutSettings.border.leftWidth;
    this.right = this.layoutSettings.border.rightWidth;
    this.bottom = this.layoutSettings.border.bottomWidth;
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
      this.fullWidth = this.layoutSettings.border.fullWidth;
      this.allSides = this.layoutSettings.border.allSidesWidth;
      this.top = this.layoutSettings.border.topWidth;
      this.left = this.layoutSettings.border.leftWidth;
      this.right = this.layoutSettings.border.rightWidth;
      this.bottom = this.layoutSettings.border.bottomWidth;
    },
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
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
      this.layoutSettings.border = {
        ...this.layoutSettings.border,
        fullWidth: this.fullWidth,
        topWidth: this.top,
        leftWidth: this.left,
        rightWidth: this.right,
        bottomWidth: this.bottom,
        allSidesWidth: this.allSides,
      };
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
.width-item {
  width: 50%;
}
.width-item:first-child {
  margin-bottom: 10px;
}
.width-item:nth-child(even) {
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
