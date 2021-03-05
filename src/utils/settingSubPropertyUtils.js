const getElementsByName = function(name, type) {
  var result = "";
  switch (name) {
    case "general":
      switch (type) {
        case "Title":
        case "CustomText":
          result = ["StayWithStep"];
          break;
        case "Button":
          result = ["ButtonPurpose"];
          break;
        case "Input":
          result = ["OutsideLabel", "LabelMargin", "InputType", "Require"];
          break;
        case "TextArea":
          result = ["OutsideLabel", "LabelMargin", "Require"];
          break;
        case "DropdownList":
          result = ["LabelMargin", "Require"];
          break;
        case "RadioGroup":
        case "CheckBoxGroup":
        case "DatePicker":
          result = ["LabelMargin", "Require"];
          break;
        case "Date":
          result = ["LabelMargin", "Require"];
          break;
        case "FileUpload":
          result = ["LabelMargin", "Require"];
          break;
        case "StepBar":
          result = ["StayWithStep", "StatusSettings"];
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
          result = ["SpacingAlign"];
          break;
        case "Input":
          result = ["Width"];
          break;
        case "TextArea":
          result = ["Width", "Height"];
          break;
        case "DropdownList":
        case "DatePicker":
          result = ["Width"];
          break;
        case "Date":
          result = ["DayWidth", "MonthWidth", "YearWidth"];
          break;
        case "FileUpload":
          result = ["Width"];
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
        case "TwoColumn":
        case "ThreeColumn":
        case "FourColumn":
          result = ["ColumnsWidth"];
          break;
        case "Divider":
          result = ["Width", "SpacingAlign"];
          break;
        case "Spacer":
          result = ["Height"];
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
        case "DropdownList":
        case "RadioGroup":
        case "CheckBoxGroup":
        case "DatePicker":
        case "Date":
        case "FileUpload":
          result = ["FieldName", "InputName"];
          break;
        case "StepBar":
          result = ["StepTitle"];
          break;
        default:
          break;
      }
      break;
    case "border":
      switch (type) {
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
        case "Date":
          result = ["DateFormat"];
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
