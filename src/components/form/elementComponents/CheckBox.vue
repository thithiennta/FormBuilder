<template>
  <div
    class="form-element-wrapper"
    :style="{ 'background-color': properties.general.backgroundColor }"
  >
    <label
      :style="{
        ['margin' + margin]: 'auto',
      }"
    >
      <input
        type="checkbox"
        :name="properties.text.name"
        :style="{
          width: properties.box.size + 'px',
          height: properties.box.size + 'px',
        }"
      />
      <label
        :style="{
          'font-size': properties.text.size + 'px',
          color: properties.text.color,
          'font-weight': properties.text.weight,
          'font-family': properties.general.fontFamily,
        }"
        >{{ properties.text.value }}</label
      >
    </label>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      required: true,
      type: Object,
    },
  },
  computed: {
    margin() {
      if (this.properties.spacing.align === "left") {
        return "-right";
      } else if (this.properties.spacing.align === "right") {
        return "-left";
      } else return "";
    },
  },
};
</script>

<style scoped>
.form-element-wrapper > label {
  display: flex;
  align-items: center;
  width: fit-content;
}
.form-element-wrapper input {
  margin-right: 5px;
}
</style>
