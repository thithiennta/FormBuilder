<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Label Style</div>
    <div class="property-adjust-wrapper">
      <a-tooltip>
        <template slot="title">
          Bold
        </template>
        <div
          class="style-item"
          @click="handleClick('bold')"
          :class="{ active: boldActive }"
        >
          <a-icon type="bold" />
        </div>
      </a-tooltip>
      <a-tooltip>
        <template slot="title">
          Italic
        </template>
        <div
          class="style-item"
          @click="handleClick('italic')"
          :class="{ active: italicActive }"
        >
          <a-icon type="italic" />
        </div>
      </a-tooltip>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      boldActive: null,
      italicActive: null,
    };
  },
  created() {
    this.italicActive = this.layoutSettings.input.labelItalic;
    this.boldActive = this.layoutSettings.input.labelBold;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
    ...mapState("formModule", ["layoutSettings"]),
  },
  watch: {
    boldActive(value, oldValue) {
      if (oldValue === null) return;
      this.layoutSettings.input.labelBold = value;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
    italicActive(value, oldValue) {
      if (oldValue === null) return;
      this.layoutSettings.input.labelItalic = value;
      // This to ADD PREVIOUS STATE and CLONE STATE
      this.$store.dispatch("formModule/updateProperty");
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "formModule/changeLayoutProperty",
        this.layoutSettings
      );
    },
    activeElement() {
      this.italicActive = this.layoutSettings.input.labelItaluc;
      this.boldActive = this.layoutSettings.input.labelBold;
    },
  },
  methods: {
    handleClick(type) {
      if (type === "bold") {
        this.boldActive = !this.boldActive;
      } else if (type === "italic") {
        this.italicActive = !this.italicActive;
      }
    },
  },
};
</script>

<style scoped>
.style-item {
  padding: 10px 15px;
  background-color: white;
  display: inline-block;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
}
.style-item i {
  color: rgb(112, 112, 112);
  font-size: 16px;
}
.style-item.active i {
  color: #1890ff;
}
.style-item:hover i {
  color: #1890ff;
}
</style>
