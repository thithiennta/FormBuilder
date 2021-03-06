import { v4 as uuid } from "uuid";
const defaultForm = {
  layoutSettings: {
    backgroundColor: "white",
    fontFamily: "'Catamaran', sans-serif",
    fontSize: 16,
    color: "black",
    weight: 400,
    layoutStyles: {
      borderWidth: 1,
      borderRadius: 0,
      borderColor: "black",
      fullPadding: false,
      allSidesPadding: 5,
      topPadding: 0,
      rightPadding: 0,
      bottomPadding: 0,
      leftPadding: 0,
    },
    form: {
      action: "",
      method: "GET",
      type: "multi step",
      numberStep: 3,
    },
    label: {
      isOutsideLabel: true,
      labelPosition: "left",
      labelSize: 16,
      labelWidth: 100,
      labelBold: true,
      labelItalic: false,
      labelBottomMargin: 0,
      labelAlignCenter: true,
      labelColor: "black",
      labelInheritColor: true,
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
    field: {
      padding: 10,
      height: 45,
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  elements: [
    {
      rowId: uuid(),
      name: "Title",
      icon: "highlight",
      type: "Title",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "Inherit",
          isKeepWithStep: true,
          stepPage: 1,
        },
        text: {
          value: "STEP FORM",
          color: "black",
          size: 40,
          weight: 700,
          style: "normal",
          decoration: "none",
          inheritColor: true,
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
      rowId: uuid(),
      type: "StepBar",
      icon: "fund",
      name: "Step Bar",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "inherit",
          label: {},
          isKeepWithStep: true,
          stepPage: 1,
        },
        border: {},
        text: {
          haveTitle: true,
          titles: ["Step 1", "Step 2", "Step 3"],
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
    {
      rowId: uuid(),
      type: "TwoColumn",
      name: "Two Column",
      icon: "pause",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          isKeepWithStep: false,
          stepPage: 1,
        },
        spacing: {
          column1Width: 50,
          column2Width: 50,
        },
      },
      settings: ["general", "spacing"],
      elements: [
        [
          {
            rowId: uuid(),
            type: "Input",
            name: "Input",
            icon: "font-colors",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "Inherit",
                type: "text",
                isRequired: true,
                isKeepWithStep: false,
                stepPage: 1,
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
                fieldName: "First Name",
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
        ],
        [
          {
            rowId: uuid(),
            type: "Input",
            name: "Input",
            icon: "font-colors",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "Inherit",
                type: "text",
                isRequired: true,
                isKeepWithStep: false,
                stepPage: 1,
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
                fieldName: "Last Name",
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
        ],
      ],
    },
    {
      rowId: uuid(),
      type: "Input",
      name: "Input",
      icon: "font-colors",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "Inherit",
          type: "email",
          isRequired: true,
          isKeepWithStep: false,
          stepPage: 1,
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
          fieldName: "Email",
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
      rowId: uuid(),
      type: "RadioGroup",
      icon: "check-circle",
      name: "Radio Group",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "inherit",
          isRequired: false,
          isKeepWithStep: false,
          stepPage: 1,
          label: {
            labelTopMargin: 0,
            labelRightMargin: 0,
            labelLeftMargin: 0,
            labelBottomMargin: 0,
            inheritLabelMargin: true,
          },
        },
        text: {
          fieldName: "Gender",
          name: "form_gender",
        },
        spacing: {},
        option: {
          options: ["male", "female"],
          optionsDirection: "horizontal",
          optionSpacing: 100,
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
      rowId: uuid(),
      type: "DatePicker",
      name: "Date Picker",
      icon: "calendar",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "inherit",
          isRequired: false,
          isKeepWithStep: false,
          stepPage: 1,
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
          fieldName: "Birthday",
          name: "",
        },
        spacing: {
          width: 40,
        },
        option: {
          leftMargin: 0,
        },
        box: {},
      },
      settings: ["general", "spacing", "text"],
    },
    {
      rowId: uuid(),
      type: "TwoColumn",
      name: "Two Column",
      icon: "pause",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          isKeepWithStep: false,
          stepPage: 1,
        },
        spacing: {
          column1Width: 50,
          column2Width: 50,
        },
      },
      settings: ["general", "spacing"],
      elements: [
        [
          {
            rowId: uuid(),
            type: "DropdownList",
            name: "Dropdown List",
            icon: "database",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "inherit",
                isRequired: false,
                isKeepWithStep: false,
                stepPage: 1,
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
              border: {},
              text: {
                fieldName: "Month",
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
              option: {
                options: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                optionsDirection: "horizontal",
                leftMargin: 0,
              },
              box: {},
            },
            settings: ["general", "spacing", "text", "option"],
          },
        ],
        [
          {
            rowId: uuid(),
            type: "DropdownList",
            name: "Dropdown List",
            icon: "database",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "inherit",
                isRequired: false,
                isKeepWithStep: false,
                stepPage: 1,
                label: {
                  labelTopMargin: 0,
                  labelRightMargin: 43,
                  labelLeftMargin: 0,
                  labelBottomMargin: 0,
                  inheritLabelMargin: false,
                  haveSubLabel: false,
                  subLabel: "",
                },
              },
              border: {},
              text: {
                fieldName: "Year",
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
              option: {
                options: [
                  1990,
                  1991,
                  1992,
                  1993,
                  1994,
                  1995,
                  1996,
                  1997,
                  1998,
                  1999,
                  2000,
                  2001,
                  2002,
                  2003,
                ],
                optionsDirection: "horizontal",
                leftMargin: 0,
              },
              box: {},
            },
            settings: ["general", "spacing", "text", "option"],
          },
        ],
      ],
    },
    {
      rowId: uuid(),
      type: "CheckBoxGroup",
      name: "Check Box Group",
      icon: "check-square",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "inherit",
          isRequired: false,
          isKeepWithStep: false,
          stepPage: 1,
          label: {
            labelTopMargin: 0,
            labelRightMargin: 0,
            labelLeftMargin: 0,
            labelBottomMargin: 0,
            inheritLabelMargin: true,
          },
        },
        text: {
          fieldName: "Favorite",
          name: "form_favorite",
        },
        spacing: {},
        option: {
          options: ["Reading Book", "Travel", "Cooking"],
          optionsDirection: "vertical",
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
      rowId: uuid(),
      type: "TextArea",
      icon: "bold",
      name: "Text Area",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "inherit",
          isRequired: false,
          isKeepWithStep: false,
          stepPage: 1,
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
          fieldName: "Message",
          placeholder: "Leave your message",
          name: "",
        },
        spacing: {
          width: 100,
          height: 100,
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
      rowId: uuid(),
      type: "Button",
      icon: "add",
      name: "Button",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          fontFamily: "Inherit",
          isKeepWithStep: false,
          stepPage: 1,
          purpose: "next step",
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
          value: "Next Step",
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
      rowId: uuid(),
      type: "TwoColumn",
      name: "Two Column",
      icon: "pause",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          isKeepWithStep: false,
          stepPage: 2,
        },
        spacing: {
          column1Width: 50,
          column2Width: 50,
        },
      },
      settings: ["general", "spacing"],
      elements: [
        [
          {
            rowId: uuid(),
            type: "Button",
            icon: "add",
            name: "Button",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "Inherit",
                isKeepWithStep: false,
                stepPage: 2,
                purpose: "previous step",
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
                value: "Previous Step",
                color: "black",
                size: 16,
                inheritSize: true,
                inheritColor: true,
              },
              spacing: {
                backgroundColor: "white",
                width: 50,
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
        ],
        [
          {
            rowId: uuid(),
            type: "Button",
            icon: "add",
            name: "Button",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "Inherit",
                isKeepWithStep: false,
                stepPage: 2,
                purpose: "next step",
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
                value: "Next Step",
                color: "black",
                size: 16,
                inheritSize: true,
                inheritColor: true,
              },
              spacing: {
                backgroundColor: "white",
                width: 50,
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
        ],
      ],
    },
    {
      rowId: uuid(),
      type: "TwoColumn",
      name: "Two Column",
      icon: "pause",
      properties: {
        general: {
          backgroundColor: "rgba(0,0,0,0)",
          isKeepWithStep: false,
          stepPage: 3,
        },
        spacing: {
          column1Width: 50,
          column2Width: 50,
        },
      },
      settings: ["general", "spacing"],
      elements: [
        [
          {
            rowId: uuid(),
            type: "Button",
            icon: "add",
            name: "Button",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "Inherit",
                isKeepWithStep: false,
                stepPage: 3,
                purpose: "previous step",
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
                value: "Previous Step",
                color: "black",
                size: 16,
                inheritSize: true,
                inheritColor: true,
              },
              spacing: {
                backgroundColor: "white",
                width: 50,
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
        ],
        [
          {
            rowId: uuid(),
            type: "Button",
            icon: "add",
            name: "Button",
            properties: {
              general: {
                backgroundColor: "rgba(0,0,0,0)",
                fontFamily: "Inherit",
                isKeepWithStep: false,
                stepPage: 3,
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
                value: "Send Information",
                color: "black",
                size: 16,
                inheritSize: true,
                inheritColor: true,
              },
              spacing: {
                backgroundColor: "white",
                width: 50,
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
        ],
      ],
    },
  ],
  previousStates: [],
  nextStates: [],
};

const emptyForm = {
  layoutSettings: {
    backgroundColor: "white",
    fontFamily: "'Nunito', sans-serif",
    fontSize: 16,
    color: "black",
    weight: 600,
    layoutStyles: {
      fullPadding: false,
      allSidesPadding: 5,
      topPadding: 0,
      rightPadding: 0,
      bottomPadding: 0,
      leftPadding: 0,
    },
    form: {
      action: "",
      method: "GET",
      type: "normal",
    },
    label: {
      isOutsideLabel: true,
      labelPosition: "left",
      labelSize: 16,
      labelWidth: 100,
      labelBold: true,
      labelItalic: false,
      labelBottomMargin: 0,
      labelAlignCenter: true,
      labelColor: "black",
      labelInheritColor: true,
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
    field: {
      padding: 10,
      height: 45,
      backgroundColor: "rgba(0,0,0,0)",
    },
  },
  elements: [],
  previousStates: [],
  nextStates: [],
};

const basicForms = { defaultForm, emptyForm };

export default basicForms;
