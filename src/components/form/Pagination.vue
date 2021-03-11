<template>
  <div class="step-form-pagination">
    <a-pagination
      v-model="current"
      :total="layoutSettings.form.numberStep"
      :defaultPageSize="1"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      current: 1,
    };
  },
  created() {
    this.current = this.currentStep + 1;
  },
  computed: {
    ...mapState("formModule", ["currentStep", "layoutSettings"]),
  },
  watch: {
    current() {
      this.$store.dispatch("formModule/changeCurrentStep", this.current - 1);
      this.$store.dispatch("customizerModule/unselectElement");
    },
  },
};
</script>

<style scoped>
.step-form-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
