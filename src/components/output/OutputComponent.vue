<template>
  <form
    :method="layoutSettings.form.method"
    :action="layoutSettings.form.action"
    class="form-content"
    :style="{
      'background-color': layoutSettings.backgroundColor,
      'font-family': layoutSettings.fontFamily,
      'font-size': layoutSettings.fontSize + 'px',
      color: layoutSettings.color,
      ...padding,
    }"
  >
    <OutputElement :formElement="el" v-for="el in elements" :key="el.rowId" />
  </form>
</template>

<script>
import OutputElement from "./OutputElement";
import { mapState } from "vuex";
export default {
  components: {
    OutputElement,
  },
  computed: {
    ...mapState("formModule", ["layoutSettings", "elements"]),
    padding() {
      if (this.layoutSettings.layoutStyles.fullPadding) {
        return {
          padding:
            this.layoutSettings.layoutStyles.topPadding +
            "px " +
            this.layoutSettings.layoutStyles.rightPadding +
            "px " +
            this.layoutSettings.layoutStyles.bottomPadding +
            "px " +
            this.layoutSettings.layoutStyles.leftPadding +
            "px ",
        };
      } else {
        return {
          padding: this.layoutSettings.layoutStyles.allSidesPadding + "px",
        };
      }
    },
  },
};
</script>

<style scoped>
.form-content {
  max-width: 1000px;
  width: 90%;
  margin: 10px auto;
}
.form-content > .element-big-wrapper {
  padding: unset !important;
}
</style>
<style>
.two-column-wrapper,
.three-column-wrapper,
.four-column-wrapper {
  display: flex;
}
.form-element-wrapper {
  padding: 10px;
  background-color: white;
}
button {
  cursor: pointer;
}
button,
input,
textarea {
  outline: none;
}
.form-element-wrapper > label {
  display: flex;
  align-items: center;
  width: fit-content;
}
</style>
