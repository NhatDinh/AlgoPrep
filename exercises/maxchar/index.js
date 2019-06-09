// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = toMap(str);
  const maxChar = getMaxChar(map);
  return maxChar;
}

//create hash map (String str)
function toMap(str) {
  const map = {};
  for (let char of str) {
    console.log("char: ", char, "count ", map[char]);
    if (map.hasOwnProperty(char)) {
      map[char]++;
    } else {
      map[char] = 1;
    }
    console.log(map);
    debugger;
  }
  return map;
}

//get max char (Object map)
function getMaxChar(map) {
  max = 0;
  maxChar = "";
  for (let char in map) {
    console.log("CHAR", char);
    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }
  return maxChar;
}

//debug
//toMap("apple 1231111");

module.exports = maxChar;
