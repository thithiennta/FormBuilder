<template>
  <a-collapse
    default-active-key="1"
    :bordered="false"
    class="customizer-container customizer-tools-wrapper"
    expand-icon-position="right"
  >
    <a-collapse-panel key="1" header="TOOLS" class="customizer-collapse-panel">
      <Draggable
        class="customizer-tools-content"
        ghost-class="customizer-tool-ghost"
        :list="customizerTools"
        :group="{ name: 'form-builder-group', pull: 'clone', put: false }"
        :sort="false"
        :clone="handleClone"
      >
        <div
          class="customizer-tool-wrapper"
          :span="12"
          v-for="(customizerTool, index) in customizerTools"
          :key="index"
        >
          <CustomizerElement :customizerElement="customizerTool" />
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
      customizerTools: [
        {
          name: "Title",
          icon: "highlight",
          type: "Title",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
            },
            text: {
              value: "SAMPLE FORM",
              color: "black",
              size: 40,
              weight: 600,
              style: "normal",
              decoration: "none",
            },
            spacing: {
              align: "center",
            },
          },
          settings: ["general", "spacing", "text"],
        },
        {
          name: "Text",
          icon: "edit",
          type: "CustomText",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
            },
            text: {
              value: "Sample Text",
              color: "black",
              size: 16,
              inheritSize: false,
              inheritColor: false,
              weight: 500,
              style: "normal",
              decoration: "none",
            },
            spacing: {
              align: "center",
            },
          },
          settings: ["general", "spacing", "text"],
        },
        {
          name: "Button",
          icon: "plus",
          type: "Button",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
            },
            fullPadding: false,
            border: {
              fullWidth: false,
              allSidesWidth: 1,
              topWidth: 1,
              rightWidth: 1,
              bottomWidth: 1,
              leftWidth: 1,
              style: "solid",
              color: "black",
              radius: 5,
            },
            text: {
              value: "Click me",
              color: "black",
              size: 16,
              inheritSize: false,
              inheritColor: false,
              align: "center",
              weight: 600,
              style: "normal",
              decoration: "none",
            },
            spacing: {
              backgroundColor: "white",
              width: 30,
              height: 50,
              align: "center",
              fullPadding: false,
              allSidesPadding: 0,
              topPadding: 0,
              rightPadding: 0,
              bottomPadding: 0,
              leftPadding: 0,
            },
          },
          settings: ["general", "spacing", "text", "border"],
        },
        {
          name: "Input",
          icon: "font-colors",
          type: "Input",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
            },
            border: {
              fullWidth: false,
              allSidesWidth: 1,
              topWidth: 1,
              rightWidth: 1,
              bottomWidth: 1,
              leftWidth: 1,
              style: "solid",
              color: "black",
              radius: 0,
            },
            text: {
              placeholder: "Sample Placeholder",
              name: "",
              color: "black",
              size: 16,
              inheritSize: false,
              inheritColor: false,
              align: "left",
              weight: 600,
              style: "italic",
            },
            spacing: {
              backgroundColor: "white",
              width: 50,
              height: 35,
              align: "center",
              fullPadding: false,
              allSidesPadding: 5,
              topPadding: 5,
              rightPadding: 5,
              bottomPadding: 5,
              leftPadding: 5,
            },
          },
          settings: ["general", "spacing", "text", "border"],
        },
        {
          name: "Text Area",
          type: "TextArea",
          icon: "bold",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
            },
            border: {
              fullWidth: false,
              allSidesWidth: 1,
              topWidth: 1,
              rightWidth: 1,
              bottomWidth: 1,
              leftWidth: 1,
              style: "solid",
              color: "black",
              radius: 0,
            },
            text: {
              placeholder: "Sample Placeholder",
              name: "",
              color: "black",
              size: 16,
              inheritSize: false,
              inheritColor: false,
              align: "left",
              weight: 600,
            },
            spacing: {
              backgroundColor: "white",
              width: 50,
              height: 50,
              align: "center",
              fullPadding: false,
              allSidesPadding: 5,
              topPadding: 5,
              rightPadding: 5,
              bottomPadding: 5,
              leftPadding: 5,
            },
          },
          settings: ["general", "spacing", "text", "border"],
        },
        {
          name: "Check Box",
          type: "CheckBox",
          icon: "check-square",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
            },
            text: {
              value: "Check Box",
              name: "",
              color: "black",
              size: 16,
              inheritSize: false,
              inheritColor: false,
              weight: 600,
              style: "italic",
            },
            spacing: {
              align: "center",
            },
            box: {
              size: 16,
              boxColor: "black",
              checkColor: "black",
            },
          },
          settings: ["spacing", "text", "box"],
        },
        {
          name: "Radio Button",
          type: "RadioButton",
          icon: "check-circle",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
            },
            text: {
              value: "Radio Value",
              name: "",
              color: "black",
              size: 16,
              inheritSize: false,
              inheritColor: false,
              weight: 600,
              style: "italic",
            },
            spacing: {
              align: "center",
            },
            box: {
              size: 16,
              boxColor: "black",
              checkColor: "black",
            },
          },
          settings: ["spacing", "text", "box"],
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
      const targetItem = {
        rowId: uuid(),
        type,
        properties,
        settings,
      };
      const cloneItem = JSON.parse(JSON.stringify(targetItem));
      return cloneItem;
    },
  },
};
</script>
