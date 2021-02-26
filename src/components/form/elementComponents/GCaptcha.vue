<template>
  <div class="form-element-wrapper">
    <vue-recaptcha
      sitekey="6LcPDwsaAAAAALbv_vVXsocvTlspFNymS5L-JxqE"
      :loadRecaptchaScript="true"
    ></vue-recaptcha>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  components: {
    VueRecaptcha,
  },
};
</script>
