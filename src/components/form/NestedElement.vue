<template>
  <Draggable
    v-bind="dragOptions"
    :list="list"
    :value="value"
    @input="emitter"
    handle=".element-moving-handle"
  >
    <div v-for="el in realValue" :key="el.rowId">
      <FormElement :formElement="el" />
    </div>
  </Draggable>
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
  },
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
