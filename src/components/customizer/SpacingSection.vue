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
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
            },
          },
          settings: ["general"],
          elements: [],
        },
        {
          name: "Two Column",
          icon: "pause",
          type: "TwoColumn",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
            },
            spacing: {
              column1Width: 50,
              column2Width: 50,
            },
          },
          settings: ["general", "spacing"],
          elements: [[], []],
        },
        {
          name: "Three Column",
          icon: "menu",
          type: "ThreeColumn",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
            },
            spacing: {
              column1Width: 33.3,
              column2Width: 33.3,
              column3Width: 33.3,
            },
          },
          settings: ["general", "spacing"],
          elements: [[], [], []],
        },
        {
          name: "Four Column",
          icon: "menu",
          type: "FourColumn",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
            },
            spacing: {
              column1Width: 25,
              column2Width: 25,
              column3Width: 25,
              column4Width: 25,
            },
          },
          settings: ["general", "spacing"],
          elements: [[], [], [], []],
        },
        {
          name: "Divider",
          icon: "small-dash",
          type: "Divider",
          properties: {
            general: {
              size: 1,
              color: "black",
              style: "solid",
              backgroundColor: "rgba(0,0,0,0)",
            },
            spacing: {
              width: 100,
              align: "center",
            },
          },
          settings: ["general", "spacing"],
        },
        {
          name: "Spacer",
          icon: "column-height",
          type: "Spacer",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
            },
            spacing: {
              height: 50,
            },
          },
          settings: ["spacing"],
        },
      ],
    };
  },
  components: {
    Draggable,
    CustomizerElement,
  },
  methods: {
    handleClone({ type, properties, settings, elements }) {
      const targetItem = {
        rowId: uuid(),
        type,
        properties,
        settings,
        elements,
      };
      const cloneItem = JSON.parse(JSON.stringify(targetItem));

      return cloneItem;
    },
  },
};
</script>

<style scoped>
.customizer-tools-wrapper {
  margin-bottom: 10px !important;
}
</style>
