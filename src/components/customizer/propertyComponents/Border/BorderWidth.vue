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
            :min="1"
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
              :min="1"
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
              :min="1"
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
              :min="1"
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
              :min="1"
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
    this.fullWidth = this.activeElement.properties.border.fullWidth;
    this.allSides = this.activeElement.properties.border.allSidesWidth;
    this.top = this.activeElement.properties.border.topWidth;
    this.left = this.activeElement.properties.border.leftWidth;
    this.right = this.activeElement.properties.border.rightWidth;
    this.bottom = this.activeElement.properties.border.bottomWidth;
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
      this.fullWidth = this.activeElement.properties.border.fullWidth;
      this.allSides = this.activeElement.properties.border.allSidesWidth;
      this.top = this.activeElement.properties.border.topWidth;
      this.left = this.activeElement.properties.border.leftWidth;
      this.right = this.activeElement.properties.border.rightWidth;
      this.bottom = this.activeElement.properties.border.bottomWidth;
    },
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange() {
      this.activeElement.properties.border = {
        ...this.activeElement.properties.border,
        fullWidth: this.fullWidth > 25 ? 25 : this.fullWidth,
        topWidth: this.top > 25 ? 25 : this.top,
        leftWidth: this.left > 25 ? 25 : this.left,
        rightWidth: this.right > 25 ? 25 : this.right,
        bottomWidth: this.bottom > 25 ? 25 : this.bottom,
        allSidesWidth: this.allSides > 25 ? 25 : this.allSides,
      };
    },
    debounceFunction: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 200),
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
