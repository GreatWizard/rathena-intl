export function extractStrings(str, limit = -1, startPosition = 0) {
  let results = [];
  let startString;
  let endString;
  for (var i = 0; i < str.length && limit !== 0; i++) {
    var strChar = str.charAt(i);

    if (strChar === '"') {
      if (!startString) {
        startString = i;
      } else {
        endString = i;
      }
    }

    if (strChar === "," || i === str.length - 1) {
      startPosition--;
      if (startString && endString) {
        if (startPosition <= 0) {
          results.push(str.substring(startString, endString + 1));
          limit--;
        }
        startString = undefined;
        endString = undefined;
      }
    }
  }
  return results;
};
