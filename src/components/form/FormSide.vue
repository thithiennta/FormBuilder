<template>
  <div id="form-side" class="form-side-wrapper">
    <div class="form-side-container">
      <div class="form-content">
        <NestedElement v-model="elements" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    elements: {
      get() {
        return this.$store.state.formModule.elements;
      },
      set(value) {
        this.$store.dispatch("formModule/updateElements", value);
      },
    },
  },
};
</script>
<style scoped></style>
<style>
.form-side-wrapper {
  height: 100vh;
  background-color: white;
  background-image: linear-gradient(
      45deg,
      rgb(247, 247, 247) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg, rgb(247, 247, 247) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgb(247, 247, 247) 75%),
    linear-gradient(-45deg, transparent 75%, rgb(247, 247, 247) 75%);
  background-size: 20px 20px;
  background-position: 0px 0px, 0px 10px, 10px -10px, -10px 0px;
}
.form-side-container {
  position: relative;
  height: 80%;
  max-width: 700px;
  width: 90%;
  background-color: rgb(231, 231, 231);
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
}
.form-element-container {
  max-width: 600px;
  margin: auto;
}
</style>
