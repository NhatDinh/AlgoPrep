// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let isAnagrams = false;
  const formattedStrA = formatStr(stringA);
  const formattedStrB = formatStr(stringB);
  const mapA = toMap(formattedStrA);
  const mapB = toMap(formattedStrB);
  console.log(mapA);
  console.log(mapB);
  return (isAnagrams = isEquivalent(mapA, mapB));
}

//utilities
function formatStr(str) {
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
  return str;
}

function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  console.log("map a props:", aProps);
  var bProps = Object.getOwnPropertyNames(b);
  console.log("map b props:", bProps);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

function toMap(str) {
  let map = {};
  for (let char of str) {
    if (map.hasOwnProperty(char)) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  return map;
}

anagrams("RAIL! SAFETY!", "fairy tales");
anagrams("Hi there", "Bye there");
module.exports = anagrams;
