<template>
  <div id="app">
    <a-spin tip="Loading form..." :spinning="isLoading" class="loading-spin">
      <div class="spin-content">
        <a-row type="flex">
          <a-col flex="300px">
            <CustomizerSide />
          </a-col>
          <a-col flex="1"
            ><FormSide @showPreview="handleShowPreview" v-if="!isLoading" />
          </a-col>
        </a-row>
        <PreviewComponent
          v-if="showPreview"
          @closePreview="handleClosePreview"
        />
      </div>
    </a-spin>
  </div>
</template>

<script>
import { Spin } from "ant-design-vue";
import Vue from "vue";
import basicForms from "./utils/defaultForm";
import CustomizerSide from "./components/customizer/CustomizerSide";
import FormSide from "./components/form/FormSide";
import PreviewComponent from "./components/PreviewComponent";

Vue.use(Spin);
export default {
  name: "App",
  components: {
    CustomizerSide,
    FormSide,
    PreviewComponent,
  },
  data() {
    return {
      showPreview: false,
      isLoading: null,
    };
  },
  created() {
    this.isLoading = true;
    new Promise((resolve) => {
      setTimeout(resolve, 2000);
      this.$store.dispatch("formModule/initForm", basicForms.defaultForm);
    }).then(() => {
      this.isLoading = false;
    });
  },
  methods: {
    handleShowPreview() {
      this.showPreview = true;
    },
    handleClosePreview() {
      this.showPreview = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Reggae+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app p {
  margin: unset !important;
}
.loading-spin .ant-spin {
  top: 50% !important;
  transform: translateY(-50%);
}
</style>
<style scoped></style>
