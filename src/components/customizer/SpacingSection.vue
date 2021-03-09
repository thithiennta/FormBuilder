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
          @dragstart="handleDragStart"
          @dragend="handleDragEnd"
        >
          <div class="clone-article">
            <a-icon :type="customizerSpacing.icon" />
            <p>{{ customizerSpacing.name }}</p>
          </div>
          <CustomizerElement :customizerElement="customizerSpacing" />
        </div>
      </Draggable>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import { mapState } from "vuex";
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
              isKeepWithStep: false,
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
              isKeepWithStep: false,
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
              isKeepWithStep: false,
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
              isKeepWithStep: false,
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
              isKeepWithStep: false,
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
              isKeepWithStep: false,
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
  computed: {
    ...mapState("formModule", ["currentStep"]),
  },
  methods: {
    handleClone({ type, properties, settings, elements, name, icon }) {
      const targetItem = {
        rowId: uuid(),
        type,
        name,
        icon,
        properties,
        settings,
        elements,
      };
      targetItem.properties.general.stepPage = this.currentStep + 1;
      const cloneItem = JSON.parse(JSON.stringify(targetItem));

      return cloneItem;
    },
    handleDragStart(e) {
      e.target.classList.add("njt-drag");
    },
    handleDragEnd(e) {
      e.target.classList.remove("njt-drag");
    },
  },
};
</script>

<style scoped>
.customizer-tools-wrapper {
  margin-bottom: 10px !important;
}
.customizer-tool-wrapper.njt-drag.sortable-chosen {
  opacity: 0;
}
.customizer-tool-wrapper.customizer-tool-ghost {
  opacity: 1 !important;
}
.clone-article {
  display: none;
  width: fit-content;
  margin: 0 auto;
  text-align: center;
}
</style>
