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
          <CustomizerElement
            :customizerElement="customizerTool"
            v-if="
              (layoutSettings.form.type !== 'multi step' &&
                customizerTool.type !== 'StepBar') ||
                layoutSettings.form.type === 'multi step'
            "
          />
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
      customizerTools: [
        {
          name: "Title",
          icon: "highlight",
          type: "Title",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              isKeepWithStep: false,
            },
            text: {
              value: "SAMPLE FORM",
              color: "black",
              size: 40,
              weight: 700,
              inheritColor: true,
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
              isKeepWithStep: false,
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
              isKeepWithStep: false,
              purpose: "submit",
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
              value: "Click me",
              color: "black",
              size: 16,
              inheritSize: true,
              inheritColor: true,
            },
            spacing: {
              backgroundColor: "white",
              width: 30,
              height: 50,
              align: "center",
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
              isRequired: true,
              isKeepWithStep: false,
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
                isOutsideLabel: true,
              },
            },
            border: {},
            text: {
              fieldName: "Input Field",
              placeholder: "",
              name: "",
            },
            spacing: {
              width: 100,
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
              isRequired: true,
              isKeepWithStep: false,
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
                isOutsideLabel: true,
              },
            },
            border: {},
            text: {
              fieldName: "Textarea Field",
              placeholder: "Sample Placeholder",
              name: "",
            },
            spacing: {
              width: 100,
              height: 100,
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
          name: "Radio Group",
          type: "RadioGroup",
          icon: "check-circle",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              isRequired: true,
              isKeepWithStep: false,
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
            },
            spacing: {},
            option: {
              options: ["Option 1", "Option 2", "Option 3"],
              optionsDirection: "horizontal",
              optionSpacing: 50,
              leftMargin: 0,
            },
            box: {
              size: 16,
              boxColor: "black",
              checkColor: "black",
            },
          },
          settings: ["general", "text", "option", "box"],
        },
        {
          name: "Check Box Group",
          type: "CheckBoxGroup",
          icon: "check-square",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              isRequired: true,
              isKeepWithStep: false,
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
            },
            spacing: {},
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
          settings: ["general", "text", "option", "box"],
        },
        {
          name: "Dropdown List",
          type: "DropdownList",
          icon: "database",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              isRequired: true,
              isKeepWithStep: false,
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
            },
            border: {},
            text: {
              fieldName: "Dropdown List",
              name: "",
            },
            spacing: {
              width: 50,
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
            },
            box: {},
          },
          settings: ["general", "spacing", "text", "option"],
        },
        {
          name: "Date Picker",
          type: "DatePicker",
          icon: "calendar",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              isRequired: true,
              isKeepWithStep: false,
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
            },
            border: {},
            text: {
              fieldName: "Date Picker",
              name: "",
            },
            spacing: {
              width: 40,
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
            box: {},
          },
          settings: ["general", "spacing", "option", "text"],
        },
        {
          name: "G-Captcha",
          type: "GCaptcha",
          icon: "google",
        },
        {
          name: "Date",
          type: "Date",
          icon: "project",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              isRequired: true,
              isKeepWithStep: false,
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
            },
            border: {},
            text: {
              fieldName: "Date",
              name: "",
            },
            spacing: {
              dayWidth: 10,
              monthWidth: 40,
              yearWidth: 20,
            },
            option: {
              dateFormat: "DD/MM/YYYY",
              leftMargin: 0,
            },
            box: {},
          },
          settings: ["general", "spacing", "option", "text"],
        },
        {
          name: "File Upload",
          type: "FileUpload",
          icon: "upload",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              isRequired: true,
              isKeepWithStep: false,
              label: {
                labelTopMargin: 0,
                labelRightMargin: 0,
                labelLeftMargin: 0,
                labelBottomMargin: 0,
                inheritLabelMargin: true,
              },
            },
            border: {},
            text: {
              fieldName: "File Upload",
              name: "",
            },
            spacing: {
              width: 100,
            },
            option: {},
            box: {},
          },
          settings: ["general", "spacing", "text"],
        },
        {
          name: "Step Bar",
          type: "StepBar",
          icon: "fund",
          properties: {
            general: {
              backgroundColor: "rgba(0,0,0,0)",
              fontFamily: "inherit",
              label: {},
              isKeepWithStep: true,
            },
            border: {},
            text: {
              haveTitle: true,
              titles: ["Title 1", "Title 2", "Title 3"],
            },
            step: {
              type: "normal",
              finishColor: "rgb(85, 163, 219)",
              finishNumberColor: "black",
              finishTitleColor: "black",
              processColor: "rgb(85, 163, 219)",
              processNumberColor: "white",
              processTitleColor: "rgba(25,168, 242, 1)",
              waitColor: "rgb(222, 223, 224)",
              waitNumberColor: "black",
              waitTitleColor: "black",
            },
            spacing: {
              width: 100,
            },
            option: {},
            box: {},
          },
          settings: ["general", "spacing", "text"],
        },
      ],
    };
  },
  components: {
    Draggable,
    CustomizerElement,
  },
  computed: {
    ...mapState("formModule", ["currentStep", "layoutSettings"]),
  },
  methods: {
    handleClone({ type, properties, settings }) {
      const targetItem = {
        rowId: uuid(),
        type,
        properties,
        settings,
      };
      targetItem.properties.general.stepPage = this.currentStep + 1;
      const cloneItem = JSON.parse(JSON.stringify(targetItem));
      return cloneItem;
    },
  },
};
</script>
