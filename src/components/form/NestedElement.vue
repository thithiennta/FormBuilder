<template>
  <draggable v-bind="dragOptions" :list="list" :value="value" @input="emitter" @change="handleChange" class="form-draggable">
    <transition-group type="transition" name="flip-list">
      <div class="nested-element" v-for="el in realValue" :key="el.rowId" @dragstart="handleDragStart" @dragend="handleDragEnd" @dragover="handleDragOver">
        <FormElement :formElement="el" :parentElement="realValue" :isTopElement="value ? true : false" />
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import $ from 'jquery'
import Draggable from 'vuedraggable'
import FormElement from './FormElement'
export default {
  name: 'nested-element',
  components: {
    Draggable,
    FormElement,
  },
  methods: {
    handleDragOver() {
      $('.element-big-wrapper').removeClass('hover-element')
    },
    handleDragStart(e) {
      $('.element-big-wrapper').removeClass('hover-element')
      e.target.classList.add('njt-drag')
    },
    handleDragEnd(e) {
      e.target.classList.remove('njt-drag')
    },
    emitter(value) {
      this.$emit('input', value)
    },
    handleChange(v) {
      if (this.list) {
        if (v.removed) {
          this.$store.commit('formModule/CLONE_STATE')
        }
        this.$store.commit('formModule/ADD_PREVIOUS_STATE')
        this.$store.dispatch('customizerModule/addColumnItem')
        this.$store.commit('formModule/CLONE_STATE')
      }
    },
  },
  watch: {},
  computed: {
    dragOptions() {
      return {
        animation: 300,
        group: 'form-builder-group',
        disabled: false,
        ghostClass: 'form-element-ghost',
      }
    },
    realValue() {
      return this.value ? this.value : this.list
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
}
</script>
<style scoped>
.sortable-chosen.njt-drag .element-big-wrapper {
  opacity: 0;
  width: 100% !important;
}
.form-draggable >>> .sortable-chosen.njt-drag.form-element-ghost {
  width: 100% !important;
}
.form-draggable >>> .customizer-tool-wrapper.form-element-ghost {
  opacity: 1 !important;
  width: 100% !important;
  padding: 10px 0;
  background-color: rgb(223, 218, 255) !important;
}
.form-draggable >>> .customizer-tool-wrapper.form-element-ghost .element-wrapper {
  display: none !important;
}
.form-draggable >>> .customizer-tool-wrapper.form-element-ghost .clone-article {
  display: block !important;
}
</style>
<style>
.flip-list-move {
  transition: transform 0.3s;
}
</style>
