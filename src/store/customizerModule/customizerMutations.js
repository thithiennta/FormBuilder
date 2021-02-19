export default {
  SET_ACTIVE_ELEMENT(state, payload) {
    state.activeElement = payload;
  },
  SET_ACTIVE_ELEMENT_STATUS(state, payload) {
    state.haveActiveElement = payload;
  },
  UPDATE_ELEMENT(state, payload) {
    state.activeElement = payload;
  },
  REFRESH_STATE() {},
  CHANGE_ELEMENT_ACTIVE_TAB(state, payload) {
    state.isElementTabActive = payload;
  },
  CHANGE_COLUMN_TYPE(state, payload) {
    var el = [];
    var spacing = {};
    if (payload === "OneColumn") {
      state.activeElement.elements.forEach((item) => {
        el.push(...item);
      });
      spacing = {};
    } else if (payload === "TwoColumn") {
      state.activeElement.elements.forEach((item, index) => {
        if (index > 1) {
          el[1].push(...item);
        } else {
          el.push(item);
        }
      });
      if (el.length < 2)
        for (let i = el.length; i < 2; i++) {
          el.push([]);
        }
      spacing = {
        column1Width: 50,
        column2Width: 50,
      };
    } else if (payload === "ThreeColumn") {
      state.activeElement.elements.forEach((item, index) => {
        if (index > 2) {
          el[2].push(...item);
        } else {
          el.push(item);
        }
      });
      if (el.length < 3)
        for (let i = el.length; i < 3; i++) {
          el.push([]);
        }
      spacing = {
        column1Width: 33.3,
        column2Width: 33.3,
        column3Width: 33.3,
      };
    } else if (payload === "FourColumn") {
      state.activeElement.elements.forEach((item) => {
        el.push(item);
      });
      if (el.length < 4)
        for (let i = el.length; i < 4; i++) {
          el.push([]);
        }
      spacing = {
        column1Width: 25,
        column2Width: 25,
        column3Width: 25,
        column4Width: 25,
      };
    }
    state.activeElement.type = payload;
    state.activeElement.elements = el;
    state.activeElement.properties.spacing = spacing;
  },
};
