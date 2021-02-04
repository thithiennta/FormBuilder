import formActions from "./formActions";
import formMutations from "./formMutations";
// import { v4 as uuid } from "uuid";
export default {
  namespaced: true,
  state: {
    elements: [
      // {
      //   rowId: uuid(),
      //   type: "Button",
      //   properties: {
      //     backgroundColor: "white",
      //     fullPadding: false,
      //     padding: [0],
      //     border: {
      //       fullWidth: false,
      //       allSidesWidth: 1,
      //       topWidth: 1,
      //       rightWidth: 1,
      //       bottomWidth: 1,
      //       leftWidth: 1,
      //       style: "solid",
      //       color: "black",
      //       radius: 50,
      //     },
      //     text: {
      //       value: "Click me",
      //       color: "red",
      //       size: 16,
      //       align: "center",
      //       weight: 600,
      //       style: "italic",
      //     },
      //     spacing: {
      //       backgroundColor: "white",
      //       width: 30,
      //       height: 50,
      //       align: "center",
      //       fullPadding: false,
      //       allSidesPadding: 0,
      //       topPadding: 0,
      //       rightPadding: 0,
      //       bottomPadding: 0,
      //       leftPadding: 0,
      //     },
      //   },
      //   settings: ["spacing", "text", "border"],
      // },
    ],
  },
  actions: formActions,
  mutations: formMutations,
};
