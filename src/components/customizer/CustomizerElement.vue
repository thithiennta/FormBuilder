<template>
  <div class="element-wrapper">
    <a-icon class="element-icon" :type="customizerElement.icon" />
    <!-- <a-icon
      class="element-icon"
      :type="customizerElement.icon"
      v-if="haveIcon"
    />
    <div class="column-wrapper" v-if="!haveIcon">
      <div
        class="column-item"
        v-for="col in colArray"
        :key="col"
        :style="{ width: 100 / colArray.length + '%' }"
      ></div>
    </div> -->
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
  computed: {
    haveIcon() {
      if (this.customizerElement.type.indexOf("Column") === -1) {
        return true;
      }
      return false;
    },
    colArray() {
      var colNumber = null;
      switch (this.customizerElement.type) {
        case "OneColumn":
          colNumber = 1;
          break;
        case "TwoColumn":
          colNumber = 2;
          break;
        case "ThreeColumn":
          colNumber = 3;
          break;
        case "FourColumn":
          colNumber = 4;
          break;
      }
      var arr = [];
      for (let i = 1; i <= colNumber; i++) {
        arr.push(i);
      }
      return arr;
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
.column-wrapper {
  width: 90%;
  height: 25px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: rgb(210, 209, 209);
  display: flex;
  cursor: pointer;
  margin: inherit;
}
.column-item {
  border-right: 2px solid rgb(169, 169, 169);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: grey;
}
.column-wrapper .column-item:last-child {
  border-right: none;
}
</style>
