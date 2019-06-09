// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var sign = getSign(n);
  var reversed = reverseConst(n.toString());
  var reversedInt = getInt(reversed) * sign;
  return reversedInt;
}

//O(n) reverse function
function reverseConst(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    var char = str[i];
    reversed += char;
  }
  return reversed;
}

//utilities
function getInt(str) {
  var integer = parseInt(str);
  return integer;
}

function getSign(int) {
  var sign = Math.sign(int);
  return sign;
}

module.exports = reverseInt;
