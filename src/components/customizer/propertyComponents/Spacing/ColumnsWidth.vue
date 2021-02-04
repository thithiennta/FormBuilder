<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Width</div>
    <div class="columns-width-wrapper">
      <div
        class="column-wrapper"
        :style="{
          width: 100 / columnsNumber + '%',
        }"
        v-for="(item, index) in columnsNumber"
        :key="index"
      >
        <div class="customizer-sub-sub-title">Column {{ index + 1 }}</div>
        <div class="property-adjust-wrapper">
          <a-input-number
            :min="10"
            :max="110 - columnsNumber * 10"
            v-model="
              activeElement.properties.spacing['column' + (index + 1) + 'Width']
            "
            class="customizer-input-number"
            @change="handleChange(index)"
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
    columnsNumber() {
      return this.activeElement.elements.length;
    },
  },
  methods: {
    handleChange(column) {
      this.calculateRemainingWidth(column);
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    calculateRemainingWidth(column) {
      for (let i = 0; i < this.columnsNumber; i++) {
        if (i !== column) {
          this.activeElement.properties.spacing["column" + (i + 1) + "Width"] =
            (100 -
              this.activeElement.properties.spacing[
                "column" + (column + 1) + "Width"
              ]) /
            (this.columnsNumber - 1);
        }
      }
    },
  },
};
</script>

<style scoped>
.property-adjust-wrapper {
  position: relative;
}
.slider-tool-tip {
  color: grey;
  position: absolute;
  right: 0;
  top: -25px;
}
.columns-width-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.column-wrapper {
  text-align: center;
}
</style>
