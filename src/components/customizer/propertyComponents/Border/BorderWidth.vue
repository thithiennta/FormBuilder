<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">
      Width
      <div class="setting-switch">
        More Options
        <a-switch
          v-model="activeElement.properties.border.fullWidth"
          @change="handleChange"
        >
          <a-icon slot="checkedChildren" type="check" />
          <a-icon slot="unCheckedChildren" type="close" />
        </a-switch>
      </div>
    </div>
    <div
      class="all-slides-wrapper"
      v-if="!activeElement.properties.border.fullWidth"
    >
      <div class="customizer-sub-sub-title">All Sides</div>
      <div class="property-adjust-wrapper">
        <a-input-number
          :min="1"
          :max="100"
          v-model="activeElement.properties.border.allSidesWidth"
          class="customizer-input-number"
          @change="handleChange"
        />
      </div>
    </div>
    <div
      class="full-width-wrapper"
      v-if="activeElement.properties.border.fullWidth"
    >
      <div class="width-item">
        <div class="customizer-sub-sub-title">Top</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="1"
            :max="100"
            v-model="activeElement.properties.border.topWidth"
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
            :max="100"
            v-model="activeElement.properties.border.leftWidth"
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
            :max="100"
            v-model="activeElement.properties.border.bottomWidth"
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
            :max="100"
            v-model="activeElement.properties.border.rightWidth"
            class="customizer-input-number"
            @change="handleChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  methods: {
    handleChange() {
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
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
.customizer-sub-sub-title {
  margin-bottom: 5px;
  font-weight: 500;
  color: rgb(138, 137, 137);
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
