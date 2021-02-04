<template>
  <a-collapse
    default-active-key="1"
    :bordered="false"
    class="customizer-container customizer-tools-wrapper"
    expand-icon-position="right"
  >
    <a-collapse-panel
      key="1"
      header="SPACING"
      class="customizer-collapse-panel"
    >
      <Draggable
        class="customizer-tools-content"
        ghost-class="customizer-tool-ghost"
        :list="customizerSpacings"
        :group="{ name: 'form-builder-group', pull: 'clone', put: false }"
        :sort="false"
        :clone="handleClone"
      >
        <div
          class="customizer-tool-wrapper"
          :span="12"
          v-for="(customizerSpacing, index) in customizerSpacings"
          :key="index"
        >
          <CustomizerElement :customizerElement="customizerSpacing" />
        </div>
      </Draggable>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { v4 as uuid } from "uuid";
import Draggable from "vuedraggable";
import CustomizerElement from "./CustomizerElement";

export default {
  data() {
    return {
      customizerSpacings: [
        {
          name: "One Column",
          icon: "line",
          type: "OneColumn",
          properties: {},
          settings: [],
        },
        {
          name: "Two Column",
          icon: "pause",
          type: "TwoColumn",
          properties: {},
          settings: [],
        },
        {
          name: "Three Column",
          icon: "menu",
          type: "ThreeColumn",
          properties: {},
        },
        {
          name: "Four Column",
          icon: "menu",
          type: "FourColumn",
          properties: {},
          settings: [],
        },
        {
          name: "Divide",
          icon: "small-dash",
          type: "Divide",
          properties: {},
          settings: [],
        },
      ],
    };
  },
  components: {
    Draggable,
    CustomizerElement,
  },
  methods: {
    handleClone({ type, properties, settings }) {
      return {
        rowId: uuid(),
        type,
        properties,
        settings,
        elements: [],
      };
    },
  },
};
</script>

<style scoped>
.customizer-tools-wrapper {
  margin-bottom: 10px !important;
}
</style>
