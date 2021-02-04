<template>
  <div class="element-wrapper">
    <a-icon class="element-icon" :type="customizerElement.icon" />
    <p class="element-name">{{ customizerElement.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    customizerElement: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.element-icon {
  font-size: 20px;
}
.element-wrapper {
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
  margin: 5px;
  background-color: #47494b;
  color: rgb(210, 209, 209);
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}
.element-wrapper:hover {
  color: white;
  background-color: rgb(130, 129, 129);
}
.element-name {
  font-size: 12px;
}
</style>
