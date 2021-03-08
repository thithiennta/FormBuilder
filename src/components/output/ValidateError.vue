<template>
  <div class="validate-error-wrapper">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style>
.validate-error-wrapper {
  color: red;
}
</style>
