<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Label Margin
      <div class="property-inherit">
        <a-switch
          checked-children="Inherit"
          un-checked-children="Inherit"
          v-model="inheritCheck"
          :disabled="
            layoutSettings.label.labelPosition === 'top' ||
              (!activeElement.properties.general.label.isOutsideLabel &&
                activeElement.properties.general.label.isOutsideLabel !==
                  undefined)
          "
        />
      </div>
    </div>
    <div
      class="property-adjust-wrapper"
      v-if="
        !inheritCheck &&
          !(
            layoutSettings.label.labelPosition === 'top' ||
            (!activeElement.properties.general.label.isOutsideLabel &&
              activeElement.properties.general.label.isOutsideLabel !==
                undefined)
          )
      "
    >
      <a-slider
        v-model="value"
        :tooltip-visible="false"
        :default-value="activeElement.properties.general.label.labelRightMargin"
        @change="handleChange"
        :max="200"
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
      inheritCheck: null,
      value: null,
    };
  },
  created() {
    this.inheritCheck = this.activeElement.properties.general.label.inheritLabelMargin;
    this.value = this.activeElement.properties.general.label.labelRightMargin;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    inheritCheck(mewValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.general.label.inheritLabelMargin = this.inheritCheck;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    value(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    activeElement() {
      this.inheritCheck = this.activeElement.properties.general.label.inheritLabelMargin;
      this.value = this.activeElement.properties.general.label.labelRightMargin;
    },
  },
  methods: {
    handleChange() {
      this.activeElement.properties.general.label.labelRightMargin = this.value;
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
