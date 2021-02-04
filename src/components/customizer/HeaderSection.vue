<template>
  <div class="customizer-header-wrapper">
    <div class="customizer-container">
      <div class="customizer-select-options">
        <div
          class="customizer-select-item"
          :class="{ active: isElementTabActive }"
          @click="onChangeTab(true)"
        >
          ELEMENTS
        </div>
        <div
          class="customizer-select-item"
          :class="{ active: !isElementTabActive }"
          @click="onChangeTab(false)"
        >
          SETTINGS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isElementTabActive: true,
    };
  },
  methods: {
    onChangeTab(value) {
      this.isElementTabActive = value;
    },
  },
};
</script>

<style scoped>
.customizer-header-wrapper {
  padding: 10px 0;
  border-bottom: 1px solid #292c2e;
}

.customizer-select-options {
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: #292c2e;
  padding: 5px;
  border-radius: 7px;
}
.customizer-select-item {
  width: calc(50% - 5px);
  padding: 10px 0;
  text-align: center;
  color: white;
  cursor: pointer;
  border-radius: 7px;
}
.customizer-select-item.active {
  background-color: rgb(237, 237, 237);
  color: rgb(151, 151, 255);
}
</style>
