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
              weight: 700,
              style: "normal",
              decoration: "none",
            },
            spacing: {
              align: "center",
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
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
              inheritSize: true,
              inheritColor: true,
              weight: 500,
              style: "normal",
              decoration: "none",
            },
            spacing: {
              align: "center",
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
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
              inheritSize: true,
              inheritColor: true,
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
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
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
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
                haveSubLabel: false,
                subLabel: "",
              },
            },
            border: {
              fullWidth: false,
              allSidesWidth: 1,
              topWidth: 1,
              rightWidth: 1,
              bottomWidth: 1,
              leftWidth: 1,
              style: "solid",
              color: "rgba(174,170,170,1)",
              radius: 5,
            },
            text: {
              fieldName: "Input Field",
              placeholder: "",
              name: "",
              color: "black",
              size: 16,
              inheritSize: true,
              inheritColor: true,
              align: "left",
              weight: 600,
              style: "italic",
            },
            spacing: {
              backgroundColor: "white",
              width: 100,
              height: 45,
              align: "left",
              fullPadding: false,
              allSidesPadding: 5,
              topPadding: 0,
              rightPadding: 0,
              bottomPadding: 0,
              leftPadding: 0,
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
            },
          },
          settings: ["general", "spacing", "text"],
        },
        {
          name: "Text Area",
          type: "TextArea",
          icon: "bold",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
                isOutsideLabel: true,
              },
            },
            border: {
              fullWidth: false,
              allSidesWidth: 1,
              topWidth: 1,
              rightWidth: 1,
              bottomWidth: 1,
              leftWidth: 1,
              style: "solid",
              color: "rgba(174,170,170,1)",
              radius: 5,
            },
            text: {
              fieldName: "Textarea Field",
              placeholder: "Sample Placeholder",
              name: "",
              color: "black",
              size: 16,
              inheritSize: true,
              inheritColor: true,
              align: "left",
              weight: 600,
            },
            spacing: {
              backgroundColor: "white",
              width: 100,
              height: 100,
              align: "left",
              fullPadding: false,
              allSidesPadding: 5,
              topPadding: 5,
              rightPadding: 5,
              bottomPadding: 5,
              leftPadding: 5,
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
            },
          },
          settings: ["general", "spacing", "text"],
        },
        // {
        //   name: "Check Box",
        //   type: "CheckBox",
        //   icon: "check-square",
        //   properties: {
        //     general: {
        //       backgroundColor: "rgba(0,0,0,0)",
        //       fontFamily: "inherit",
        //     },
        //     text: {
        //       value: "Check Box",
        //       name: "",
        //       color: "black",
        //       size: 16,
        //       inheritSize: true,
        //       inheritColor: true,
        //       weight: 600,
        //       style: "italic",
        //     },
        //     spacing: {
        //       align: "center",
        //     },
        //     box: {
        //       size: 16,
        //       boxColor: "black",
        //       checkColor: "black",
        //     },
        //   },
        //   settings: ["spacing", "text", "box"],
        // },
        // {
        //   name: "Radio Button",
        //   type: "RadioButton",
        //   icon: "check-circle",
        //   properties: {
        //     general: {
        //       backgroundColor: "rgba(0,0,0,0)",
        //       fontFamily: "inherit",
        //     },
        //     text: {
        //       value: "Radio Value",
        //       name: "",
        //       color: "black",
        //       size: 16,
        //       inheritSize: true,
        //       inheritColor: true,
        //       weight: 600,
        //       style: "italic",
        //     },
        //     spacing: {
        //       align: "center",
        //     },
        //     box: {
        //       size: 16,
        //       boxColor: "black",
        //       checkColor: "black",
        //     },
        //   },
        //   settings: ["spacing", "text", "box"],
        // },
        {
          name: "Radio Group",
          type: "RadioGroup",
          icon: "check-circle",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
            },
            text: {
              fieldName: "Radio Group",
              name: "",
              color: "black",
              size: 16,
              inheritSize: true,
              inheritColor: true,
              weight: 600,
              style: "italic",
            },
            spacing: {
              align: "center",
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
            },
            option: {
              options: ["Option 1", "Option 2", "Option 3"],
              optionsDirection: "horizontal",
              optionSpacing: 10,
              leftMargin: 0,
            },
            box: {
              size: 16,
              boxColor: "black",
              checkColor: "black",
            },
          },
          settings: ["general", "spacing", "text", "option", "box"],
        },
        {
          name: "Check Box Group",
          type: "CheckBoxGroup",
          icon: "check-square",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
            },
            text: {
              fieldName: "Check Box Group",
              name: "",
              color: "black",
              size: 16,
              inheritSize: true,
              inheritColor: true,
              weight: 600,
              style: "italic",
            },
            spacing: {
              align: "center",
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
            },
            option: {
              options: ["Option 1", "Option 2", "Option 3"],
              optionsDirection: "horizontal",
              optionSpacing: 10,
              leftMargin: 10,
            },
            box: {
              size: 16,
              boxColor: "black",
              checkColor: "black",
            },
          },
          settings: ["general", "spacing", "text", "option", "box"],
        },
        {
          name: "Dropdown List",
          type: "DropdownList",
          icon: "database",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
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
              radius: 5,
            },
            text: {
              fieldName: "Dropdown List",
              name: "",
              color: "black",
              size: 16,
              inheritSize: true,
              inheritColor: true,
              weight: 600,
              style: "italic",
            },
            spacing: {
              backgroundColor: "white",
              width: 30,
              align: "center",
              fullPadding: false,
              allSidesPadding: 10,
              topPadding: 10,
              rightPadding: 10,
              bottomPadding: 10,
              leftPadding: 10,
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
            },
            option: {
              options: ["List Item 1", "List Item 2", "List Item 3"],
              optionsDirection: "horizontal",
              leftMargin: 0,
              rightMargin: 0,
            },
            box: {
              size: 16,
              boxColor: "black",
              checkColor: "black",
            },
          },
          settings: ["general", "spacing", "text", "option"],
        },
        // {
        //   name: "Birth Date Field",
        //   type: "BirthdayField",
        //   icon: "crown",
        //   properties: {
        //     general: {
        //       backgroundColor: "rgba(0,0,0,0)",
        //       fontFamily: "inherit",
        //       label: {
        //         labelTopMargin: 0,
        //         labelRightMargin: 0,
        //         labelLeftMargin: 0,
        //         labelBottomMargin: 0,
        //         inheritLabelMargin: true,
        //       },
        //     },
        //     border: {
        //       fullWidth: false,
        //       allSidesWidth: 1,
        //       topWidth: 1,
        //       rightWidth: 1,
        //       bottomWidth: 1,
        //       leftWidth: 1,
        //       style: "solid",
        //       color: "rgb(174, 170, 170)",
        //       radius: 5,
        //     },
        //     text: {
        //       fieldName: "Date Of Birth",
        //       name: "",
        //       color: "black",
        //       size: 16,
        //       inheritSize: true,
        //       inheritColor: true,
        //       weight: 600,
        //       style: "italic",
        //     },
        //     spacing: {
        //       width: 30,
        //       align: "center",
        //       fullPadding: false,
        //       allSidesPadding: 10,
        //       topPadding: 10,
        //       rightPadding: 10,
        //       bottomPadding: 10,
        //       leftPadding: 10,
        //       fullMargin: false,
        //       allSidesMargin: 0,
        //       topMargin: 0,
        //       rightMargin: 0,
        //       bottomMargin: 0,
        //       leftMargin: 0,
        //     },
        //     option: {
        //       options: ["List Item 1", "List Item 2", "List Item 3"],
        //       leftMargin: 0,
        //     },
        //     box: {
        //       size: 16,
        //       boxColor: "black",
        //       checkColor: "black",
        //     },
        //   },
        //   settings: ["general", "spacing", "option", "text", "border"],
        // },
        {
          name: "Date Picker",
          type: "DatePicker",
          icon: "calendar",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
            },
            border: {
              fullWidth: false,
              allSidesWidth: 1,
              topWidth: 1,
              rightWidth: 1,
              bottomWidth: 1,
              leftWidth: 1,
              style: "solid",
              color: "rgb(174, 170, 170)",
              radius: 5,
            },
            text: {
              fieldName: "Date Picker",
              name: "",
              color: "black",
              size: 16,
              inheritSize: true,
              inheritColor: true,
              weight: 600,
              style: "italic",
            },
            spacing: {
              backgroundColor: "white",
              width: 40,
              align: "center",
              fullPadding: false,
              allSidesPadding: 10,
              topPadding: 10,
              rightPadding: 10,
              bottomPadding: 10,
              leftPadding: 10,
              fullMargin: false,
              allSidesMargin: 0,
              topMargin: 0,
              rightMargin: 0,
              bottomMargin: 0,
              leftMargin: 0,
            },
            option: {
              leftMargin: 0,
            },
            box: {
              size: 16,
              boxColor: "black",
              checkColor: "black",
            },
          },
          settings: ["general", "spacing", "option", "text"],
        },
        {
          name: "G-Captcha",
          type: "GCaptcha",
          icon: "google",
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
