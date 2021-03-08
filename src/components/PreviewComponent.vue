<template>
  <div class="preview-section">
    <div class="preview-wrapper">
      <div class="preview-header">
        <div class="preview-title">Preview</div>
        <div class="preview-device"></div>
        <div class="preview-close" @click="handleClick">
          <div class="close-item"></div>
          <div class="close-item"></div>
        </div>
      </div>
      <div class="preview-content">
        <div class="content-layout">
          <div class="content-header">
            <div class="content-three-dot">
              <div class="content-dot"></div>
              <div class="content-dot"></div>
              <div class="content-dot"></div>
            </div>
          </div>
          <vuescroll :ops="options" class="content-body">
            <OutputComponent />
          </vuescroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OutputComponent from "./output/OutputComponent";
import vuescroll from "vuescroll";
export default {
  components: {
    vuescroll,
    OutputComponent,
  },
  data() {
    return {
      options: {
        rail: {
          size: "1px",
        },
        bar: {
          showDelay: 400,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: "#585959",
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0,
          size: "3px",
          disable: false,
        },
      },
    };
  },
  methods: {
    handleClick() {
      this.$store.commit("formModule/REFRESH_UNVALIDATE");
      this.$store.commit("formModule/CHANGE_SUBMIT_YET", null);
      this.$emit("closePreview");
    },
  },
};
</script>

<style scoped>
.preview-section {
  position: absolute;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
}
.preview-wrapper {
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.preview-title {
  margin-top: 10px;
  font-weight: 700;
  font-size: 17px;
  color: black;
}
.preview-device {
}
.preview-header {
  display: flex;
  justify-content: space-between;
}
.preview-close {
  position: relative;
  width: 25px;
  height: 25px;
  margin-top: 10px;
  cursor: pointer;
}
.close-item {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 5px;
  background-color: grey;
  border-radius: 5px;
  top: 50%;
  left: 0;
}
.close-item:first-child {
  transform: rotate(45deg);
}
.close-item:last-child {
  transform: rotate(-45deg);
}
.preview-content {
  height: calc(100% - 50px);
  margin-top: 30px;
  flex: 1;
}
.content-layout {
  height: 90%;
  width: calc(100% - 250px);
  margin: auto;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
}
.content-header {
  height: 30px;
  width: 100%;
  border-bottom: 1px solid rgb(150, 150, 150);
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.content-body {
  width: 100% !important;
  height: calc(100% - 30px) !important;
  background-color: rgb(246, 205, 232);
  overflow: hidden;
}
.content-three-dot {
  display: flex;
}
.content-dot {
  width: 15px;
  height: 15px;
  border-radius: 50px;
  margin-right: 5px;
}
.content-dot:nth-child(1) {
  background-color: rgb(191, 25, 25);
}
.content-dot:nth-child(2) {
  background-color: rgb(251, 204, 35);
}
.content-dot:nth-child(3) {
  background-color: rgb(20, 178, 36);
}
</style>
