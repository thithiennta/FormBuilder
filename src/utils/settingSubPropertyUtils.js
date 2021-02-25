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
        case "DropdownList":
          result = ["LabelMargin", "SubLabel"];
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
          result = ["SpacingMargin"];
          break;
        case "DropdownList":
        case "DatePicker":
          result = [
            "Width",
            "SpacingMargin",
            "SpacingPadding",
            "ElementBackgroundColor",
          ];
          break;
        case "Title":
        case "CustomText":
          result = ["SpacingAlign", "SpacingMargin"];
          break;
        case "Input":
        case "TextArea":
          result = ["Width", "SpacingPadding", "ElementBackgroundColor"];
          break;

        case "Button":
          result = [
            "Width",
            "Height",
            "SpacingAlign",
            "SpacingMargin",
            "SpacingPadding",
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
        case "DropdownList":
        case "RadioGroup":
        case "CheckBoxGroup":
        case "DatePicker":
          result = [
            "FieldName",
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
          result = ["MarginLeft"];
          break;
        case "DropdownList":
          result = ["MarginLeft", "Options"];
          break;
        case "RadioGroup":
        case "CheckBoxGroup":
          result = ["OptionsDirection", "OptionSpacing", "Options"];
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
