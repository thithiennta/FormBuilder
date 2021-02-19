import formActions from "./formActions";
import formMutations from "./formMutations";
import { v4 as uuid } from "uuid";
export default {
  namespaced: true,
  state: {
    layoutSettings: {
      backgroundColor: "white",
      fontFamily: "'Open Sans', sans-serif",
      fontSize: 16,
      color: "black",
    },
    elements: [
      {
        rowId: uuid(),
        name: "Title",
        icon: "highlight",
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
          spacing: { align: "center", width: 50, height: 50 },
        },
        settings: ["general", "spacing", "text"],
      },
      {
        rowId: uuid(),
        type: "TwoColumn",
        properties: {
          general: { backgroundColor: "rgba(0,0,0,0)" },
          spacing: { column1Width: 20, column2Width: 80 },
        },
        settings: ["general", "spacing"],
        elements: [
          [
            {
              rowId: uuid(),
              type: "CustomText",
              properties: {
                general: {
                  backgroundColor: "rgba(0,0,0,0)",
                  fontFamily: "Inherit",
                },
                text: {
                  value: "Name",
                  color: "black",
                  size: 16,
                  weight: 500,
                  style: "normal",
                  decoration: "none",
                },
                spacing: { align: "center" },
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
                  placeholder: "Enter Your Name",
                  name: "",
                  color: "black",
                  size: 16,
                  align: "left",
                  weight: 600,
                  style: "italic",
                },
                spacing: {
                  backgroundColor: "white",
                  width: 72,
                  height: 35,
                  align: "left",
                  fullPadding: false,
                  allSidesPadding: 5,
                  topPadding: 0,
                  rightPadding: 0,
                  bottomPadding: 0,
                  leftPadding: 0,
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
        properties: {
          general: { backgroundColor: "rgba(0,0,0,0)" },
          spacing: { column1Width: 20, column2Width: 80 },
        },
        settings: ["general", "spacing"],
        elements: [
          [
            {
              rowId: uuid(),
              type: "CustomText",
              properties: {
                general: {
                  backgroundColor: "rgba(0,0,0,0)",
                  fontFamily: "Inherit",
                },
                text: {
                  value: "Email",
                  color: "black",
                  size: 16,
                  weight: 500,
                  style: "normal",
                  decoration: "none",
                },
                spacing: { align: "center" },
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
                  placeholder: "Enter Your Email",
                  name: "",
                  color: "black",
                  size: 16,
                  align: "left",
                  weight: 600,
                  style: "italic",
                },
                spacing: {
                  backgroundColor: "white",
                  width: 72,
                  height: 35,
                  align: "left",
                  fullPadding: false,
                  allSidesPadding: 5,
                  topPadding: 0,
                  rightPadding: 0,
                  bottomPadding: 0,
                  leftPadding: 0,
                },
              },
              settings: ["general", "spacing", "text", "border"],
            },
          ],
        ],
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
    ],
    previousStates: [],
    nextStates: [],
  },
  actions: formActions,
  mutations: formMutations,
};
