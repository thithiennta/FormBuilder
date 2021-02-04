const parseNameToElement = function(name) {
  var result = "";
  switch (name) {
    case "border":
      result = "BorderProperties";
      break;
    case "text":
      result = "TextProperties";
      break;
    case "spacing":
      result = "SpacingProperties";
      break;
    case "box":
      result = "BoxProperties";
      break;
    case "general":
      result = "GeneralProperties";
      break;
    default:
      break;
  }
  return result;
};
const getElementsByNames = function(arrayNames) {
  const arrayElements = arrayNames.map((name) => {
    return parseNameToElement(name);
  });
  return arrayElements;
};
module.exports = { getElementsByNames };
