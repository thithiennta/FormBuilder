import formActions from "./formActions";
import formMutations from "./formMutations";
import { v4 as uuid } from "uuid";
export default {
  namespaced: true,
  state: {
    layoutSettings: {
      backgroundColor: "white",
      fontFamily: "'Nunito', sans-serif",
      fontSize: 16,
      color: "black",
      weight: 600,
      form: {
        action: "",
        method: "GET",
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
        type: "Title",
        properties: {
          general: { backgroundColor: "rgba(0,0,0,0)", fontFamily: "Inherit" },
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
            width: 50,
            height: 50,
            fullMargin: false,
            allSidesMargin: 0,
            topMargin: 0,
            rightMargin: 0,
            bottomMargin: 0,
            leftMargin: 0,
          },
        },
        settings: ["spacing", "text"],
      },
      {
        rowId: uuid(),
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
        elements: [
          [
            {
              rowId: uuid(),
              type: "Input",
              properties: {
                general: {
                  backgroundColor: "rgba(0,0,0,0)",
                  fontFamily: "Inherit",
                  label: {
                    labelTopMargin: 0,
                    labelRightMargin: 0,
                    labelLeftMargin: 0,
                    labelBottomMargin: 0,
                    inheritLabelMargin: true,
                    haveSubLabel: false,
                    subLabel: "",
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
                  fieldName: "First Name",
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
          ],
          [
            {
              rowId: uuid(),
              type: "Input",
              properties: {
                general: {
                  backgroundColor: "rgba(0,0,0,0)",
                  fontFamily: "Inherit",
                  label: {
                    labelTopMargin: 0,
                    labelRightMargin: 0,
                    labelLeftMargin: 0,
                    labelBottomMargin: 0,
                    inheritLabelMargin: true,
                    haveSubLabel: false,
                    subLabel: "",
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
                  fieldName: "Last Name",
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
          ],
        ],
      },
      {
        rowId: uuid(),
        type: "Input",
        properties: {
          general: {
            backgroundColor: "rgba(0,0,0,0)",
            fontFamily: "Inherit",
            label: {
              labelTopMargin: 0,
              labelRightMargin: 0,
              labelLeftMargin: 0,
              labelBottomMargin: 0,
              inheritLabelMargin: true,
              haveSubLabel: false,
              subLabel: "",
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
            fieldName: "Email",
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
        rowId: uuid(),
        type: "RadioGroup",
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
            fieldName: "Gender",
            name: "form_gender",
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
            options: ["male", "female"],
            optionsDirection: "horizontal",
            optionSpacing: 10,
            leftMargin: 0,
            rightMargin: 50,
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
            fieldName: "Birthday",
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
            rightMargin: 0,
          },
          box: {
            size: 16,
            boxColor: "black",
            checkColor: "black",
          },
        },
        settings: ["general", "spacing", "text"],
      },
      {
        rowId: uuid(),
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
        elements: [
          [
            {
              rowId: uuid(),
              type: "DropdownList",
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
                  color: "black",
                  radius: 5,
                },
                text: {
                  fieldName: "Month",
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
                  width: 100,
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
          ],
          [
            {
              rowId: uuid(),
              type: "DropdownList",
              properties: {
                general: {
                  backgroundColor: "rgba(0,0,0,0)",
                  fontFamily: "inherit",
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
                  fieldName: "Year",
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
                  width: 100,
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
          ],
        ],
      },
      {
        rowId: uuid(),
        type: "CheckBoxGroup",
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
            fieldName: "Favorite",
            name: "form_favorite",
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
            options: ["Reading Book", "Travel", "Cooking"],
            optionsDirection: "vertical",
            optionSpacing: 10,
            leftMargin: 10,
            rightMargin: 0,
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
            fieldName: "Message",
            placeholder: "Leave your message",
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
      {
        rowId: uuid(),
        type: "Button",
        properties: {
          general: {
            backgroundColor: "rgba(0,0,0,0)",
            fontFamily: "Inherit",
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
            value: "Send Information",
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
    ],
    previousStates: [],
    nextStates: [],
  },
  actions: formActions,
  mutations: formMutations,
};
