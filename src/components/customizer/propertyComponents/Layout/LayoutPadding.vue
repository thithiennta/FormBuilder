<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Padding
      <div class="setting-switch">
        More Options
        <a-switch v-model="fullPadding" @change="handleChange">
          <a-icon slot="checkedChildren" type="check" />
          <a-icon slot="unCheckedChildren" type="close" />
        </a-switch>
      </div>
    </div>
    <transition name="fade">
      <div class="all-slides-wrapper" v-if="!fullPadding">
        <div class="customizer-sub-sub-title">All Sides</div>
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
    </transition>
    <transition name="fade">
      <div class="full-width-wrapper" v-if="fullPadding">
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
    </transition>
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
    this.fullPadding = this.layoutSettings.layoutStyles.fullPadding;
    this.allSides = this.layoutSettings.layoutStyles.allSidesPadding;
    this.top = this.layoutSettings.layoutStyles.topPadding;
    this.left = this.layoutSettings.layoutStyles.leftPadding;
    this.right = this.layoutSettings.layoutStyles.rightPadding;
    this.bottom = this.layoutSettings.layoutStyles.bottomPadding;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
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
      this.fullPadding = this.layoutSettings.layoutStyles.fullPadding;
      this.allSides = this.layoutSettings.layoutStyles.allSidesPadding;
      this.top = this.layoutSettings.layoutStyles.topPadding;
      this.left = this.layoutSettings.layoutStyles.leftPadding;
      this.right = this.layoutSettings.layoutStyles.rightPadding;
      this.bottom = this.layoutSettings.layoutStyles.bottomPadding;
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
      this.layoutSettings.layoutStyles = {
        ...this.layoutSettings.layoutStyles,
        fullPadding: this.fullPadding,
        topPadding: this.top,
        leftPadding: this.left,
        rightPadding: this.right,
        bottomPadding: this.bottom,
        allSidesPadding: this.allSides,
      };
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
