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
        case "TextArea":
          result = ["OutsideLabel", "LabelMargin"];
          break;
        case "DropdownList":
          result = ["LabelMargin"];
          break;
        case "RadioGroup":
        case "CheckBoxGroup":
        case "DatePicker":
          result = ["LabelMargin"];
          break;
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
        case "RadioGroup":
        case "CheckBoxGroup":
          result = [];
          break;
        case "DropdownList":
        case "DatePicker":
          result = ["Width"];
          break;
        case "Title":
        case "CustomText":
          result = ["SpacingAlign"];
          break;
        case "Input":
          result = ["Width"];
          break;
        case "TextArea":
          result = ["Width", "Height"];
          break;

        case "Button":
          result = [
            "Width",
            "Height",
            "SpacingAlign",
            "SpacingMargin",
            "ElementBackgroundColor",
          ];
          break;
        case "CheckBox":
        case "RadioButton":
          result = ["SpacingAlign"];
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
          result = ["TextValue", "FontSize", "TextColor"];
          break;
        case "TextArea":
        case "Input":
          result = ["FieldName", "InputPlaceholder", "InputName"];
          break;
        case "CheckBox":
        case "RadioButton":
          result = ["TextValue", "InputName"];
          break;
        case "DropdownList":
        case "RadioGroup":
        case "CheckBoxGroup":
        case "DatePicker":
          result = ["FieldName", "InputName"];
          break;
        default:
          break;
      }
      break;
    case "border":
      switch (type) {
        case "DropdownList":
        case "DatePicker":
          result = ["BorderRadius", "BorderColor"];
          break;
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
        case "RadioGroup":
        case "CheckBoxGroup":
        case "CheckBox":
        case "RadioButton":
          result = ["BoxSize", "BoxColor", "CheckColor"];
          break;
      }
      break;
    case "option":
      switch (type) {
        case "DatePicker":
          result = [];
          break;
        case "DropdownList":
          result = ["Options"];
          break;
        case "RadioGroup":
        case "CheckBoxGroup":
          result = [
            "OptionsDirection",
            "MarginLeft",
            "OptionSpacing",
            "Options",
          ];
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
