<template>
  <draggable
    v-bind="dragOptions"
    :list="list"
    :value="value"
    @input="emitter"
    handle=".element-moving-handle"
    @change="handleChange"
  >
    <div v-for="el in realValue" :key="el.rowId">
      <FormElement :formElement="el" :parentElement="realValue" />
    </div>
  </draggable>
</template>

<script>
import Draggable from "vuedraggable";
import FormElement from "./FormElement";
export default {
  name: "nested-element",
  components: {
    Draggable,
    FormElement,
  },
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },
    handleChange() {
      if (this.list) {
        this.$store.commit("formModule/ADD_PREVIOUS_STATE");
        this.$store.dispatch("customizerModule/addColumnItem");
        this.$store.commit("formModule/CLONE_STATE");
      }
    },
  },
  watch: {},
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "form-builder-group",
        disabled: false,
        ghostClass: "form-element-ghost",
      };
    },
    realValue() {
      return this.value ? this.value : this.list;
    },
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null,
    },
    list: {
      required: false,
      type: Array,
      default: null,
    },
  },
};
</script>
<style scoped></style>
<style>
.form-element-ghost {
  width: 100%;
}

.form-element-ghost .element-wrapper {
  background-color: transparent;
  padding: 0;
}
.form-element-ghost .element-wrapper i {
  color: black;
}
.form-element-ghost .element-wrapper p {
  display: none;
}
</style>
