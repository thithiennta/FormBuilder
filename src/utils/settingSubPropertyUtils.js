const getElementsByName = function(name, type) {
  var result = "";
  switch (name) {
    case "general":
      switch (type) {
        case "Title":
        case "CustomText":
        case "Button":
          result = [""];
          break;
        case "Input":
          result = ["LabelMargin"];
          break;
        case "TextArea":
        case "CheckBox":
        case "RadioButton":
          result = [];
          break;
        case "OneColumn":
        case "TwoColumn":
        case "ThreeColumn":
        case "FourColumn":
          result = ["ChangeColumn"];
          break;
        case "Divider":
          result = ["DividerSize", "DividerColor", "DividerStyle"];
          break;
        default:
          break;
      }
      break;
    case "spacing":
      switch (type) {
        case "Title":
        case "CustomText":
          result = ["SpacingAlign", "SpacingMargin"];
          break;
        case "Input":
        case "TextArea":
        case "Button":
          result = [
            "Width",
            "Height",
            "SpacingAlign",
            "SpacingMargin",
            // "SpacingPadding",
            "ElementBackgroundColor",
          ];
          break;
        case "CheckBox":
        case "RadioButton":
          result = ["SpacingAlign", "SpacingMargin"];
          break;
        case "OneColumn":
          result = [""];
          break;
        case "TwoColumn":
        case "ThreeColumn":
        case "FourColumn":
          result = ["ColumnsWidth"];
          break;
        case "Divider":
          result = ["Width", "SpacingAlign"];
          break;
        default:
          break;
      }
      break;
    case "text":
      switch (type) {
        case "Title":
        case "CustomText":
          result = [
            "TextValue",
            "FontSize",
            "FontWeight",
            "FontStyle",
            "TextColor",
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
            "FieldName",
            "InputPlaceholder",
            "InputName",
            "FontSize",
            "FontWeight",
            "TextAlign",
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
