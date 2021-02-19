<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Width</div>
    <div class="columns-width-wrapper">
      <div
        class="column-wrapper"
        :style="{
          width: propertyWidth,
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
import _debounce from "lodash.debounce";
import { mapState } from "vuex";
export default {
  data() {
    return {
      column1: null,
      column2: null,
      column3: null,
      column4: null,
    };
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
    columnsNumber() {
      return this.activeElement.elements.length;
    },
    propertyWidth() {
      if (this.columnsNumber === 4) return "50%";
      else return 100 / this.columnsNumber + "%";
    },
  },
  watch: {
    column1(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    column2(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    column3(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
    column4(newValue, oldValue) {
      this.debounceFunction(newValue, oldValue);
    },
  },
  methods: {
    handleChange(column) {
      this.calculateRemainingWidth(column);
      for (let i = 0; i < this.columnsNumber; i++) {
        this["column" + (i + 1)] = this.activeElement.properties.spacing[
          "column" + (i + 1) + "Width"
        ];
      }
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
  margin-bottom: 5px;
}
</style>
