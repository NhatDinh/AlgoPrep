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
  const sign = getSign(n);
  const reversed = reverseConst(n.toString());
  const reversedInt = getInt(reversed) * sign;
  return reversedInt;
}

//O(n) reverse function
function reverseConst(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    reversed += char;
  }
  return reversed;
}

//utilities
function getInt(str) {
  const integer = parseInt(str);
  return integer;
}

function getSign(int) {
  const sign = Math.sign(int);
  return sign;
}

module.exports = reverseInt;
