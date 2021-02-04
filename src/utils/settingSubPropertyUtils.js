const getElementsByName = function(name, type) {
  var result = "";
  switch (name) {
    case "spacing":
      switch (type) {
        case "Title":
          result = ["SpacingAlign"];
          break;
        case "Input":
        case "TextArea":
        case "Button":
          result = [
            "Width",
            "Height",
            "SpacingAlign",
            "SpacingPadding",
            "ElementBackgroundColor",
          ];
          break;
        case "CheckBox":
        case "RadioButton":
          result = ["SpacingAlign"];
          break;
        default:
          break;
      }
      break;
    case "text":
      switch (type) {
        case "Title":
          result = [
            "TextValue",
            "FontSize",
            "FontWeight",
            "TextColor",
            "FontStyle",
          ];
          break;
        case "Button":
          result = [
            "TextValue",
            "FontSize",
            "FontWeight",
            "TextAlign",
            "FontStyle",
            "TextColor",
          ];
          break;
        case "TextArea":
        case "Input":
          result = [
            "InputPlaceholder",
            "InputName",
            "FontSize",
            "FontWeight",
            "TextAlign",
            "FontStyle",
            "TextColor",
          ];
          break;
        case "CheckBox":
        case "RadioButton":
          result = [
            "TextValue",
            "InputName",
            "FontSize",
            "FontWeight",
            "TextColor",
            "FontStyle",
          ];
          break;
        default:
          break;
      }
      break;
    case "border":
      switch (type) {
        case "Input":
        case "TextArea":
        case "Button":
          result = [
            "BorderWidth",
            "BorderStyle",
            "BorderRadius",
            "BorderColor",
          ];
          break;
        default:
          break;
      }
      break;
    case "box":
      switch (type) {
        case "CheckBox":
        case "RadioButton":
          result = ["BoxSize", "BoxColor", "CheckColor"];
          break;
      }
      break;
    default:
      break;
  }
  return result;
};
const getElementsByType = function(propertyName, type) {
  return getElementsByName(propertyName, type);
};
module.exports = { getElementsByType };
