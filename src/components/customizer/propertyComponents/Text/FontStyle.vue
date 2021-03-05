<template>
  <div class="property-wrapper">
    <div class="customizer-sub-title">Font Style</div>
    <div class="property-adjust-wrapper">
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
      <a-tooltip>
        <template slot="title">
          Underline
        </template>
        <div
          class="style-item"
          @click="handleClick('underline')"
          :class="{ active: underlineActive }"
        >
          <a-icon type="underline" />
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
      underlineActive: false,
      italicActive: false,
    };
  },
  created() {
    if (this.activeElement.properties.text.style === "italic")
      this.italicActive = true;
    if (this.activeElement.properties.text.decoration === "underline")
      this.underlineActive = true;
  },
  computed: {
    ...mapState("customizerModule", ["activeElement"]),
  },
  watch: {
    underlineActive(value) {
      if (value) this.activeElement.properties.text.decoration = "underline";
      else this.activeElement.properties.text.decoration = "none";
      // This to UPDATE PROPERTY
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    italicActive(value) {
      if (value) this.activeElement.properties.text.style = "italic";
      else this.activeElement.properties.text.style = "normal";
      this.$store.dispatch(
        "customizerModule/changePropertyValue",
        this.activeElement
      );
    },
    activeElement() {
      if (this.activeElement.properties.text.style === "italic")
        this.italicActive = true;
      else this.italicActive = false;
      if (this.activeElement.properties.text.decoration === "underline")
        this.underlineActive = true;
      else this.underlineActive = false;
    },
  },
  methods: {
    handleClick(type) {
      if (type === "underline") {
        this.underlineActive = !this.underlineActive;
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
