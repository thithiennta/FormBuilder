<template>
  <div id="app">
    <a-row type="flex">
      <a-col flex="300px">
        <CustomizerSide />
      </a-col>
      <a-col flex="1">
        <FormSide @showPreview="handleShowPreview" />
      </a-col>
    </a-row>
    <PreviewComponent v-if="showPreview" @closePreview="handleClosePreview" />
  </div>
</template>

<script>
import CustomizerSide from "./components/customizer/CustomizerSide";
import FormSide from "./components/form/FormSide";
import PreviewComponent from "./components/PreviewComponent";
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
    };
  },
  created() {
    this.$store.dispatch("formModule/initForm");
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
</style>
<style scoped></style>
