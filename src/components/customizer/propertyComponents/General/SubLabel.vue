<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Sub Label
      <div class="property-inherit">
        <a-switch
          checked-children="Sub label"
          un-checked-children="Sub label"
          v-model="haveSubLabel"
          disabled
        />
      </div>
    </div>
    <div class="property-adjust-wrapper" v-if="haveSubLabel">
      <a-input
        ref="userNameInput"
        v-model="subLabel"
        placeholder="Sample Sub Label"
      >
        <a-icon slot="prefix" type="edit" />
        <a-tooltip slot="suffix" title="Display at bottom">
          <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </div>
  </div>
</template>

<script>
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
  data() {
    return {
      haveSubLabel: null,
      subLabel: null,
    };
  },
  created() {
    this.haveSubLabel = this.activeElement.properties.general.label.haveSubLabel;
    this.subLabel = this.activeElement.properties.general.label.subLabel;
  },
  computed: {
    ...mapState("formModule", ["layoutSettings"]),
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    haveSubLabel(mewValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.general.label.haveSubLabel = this.haveSubLabel;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    subLabel: _debounce(function(newValue, oldValue) {
      if (oldValue === null) return;
      this.activeElement.properties.general.label.subLabel = this.subLabel;
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    }, 300),
    activeElement() {
      this.haveSubLabel = this.activeElement.properties.general.label.haveSubLabel;
      this.subLabel = this.activeElement.properties.general.label.subLabel;
    },
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
