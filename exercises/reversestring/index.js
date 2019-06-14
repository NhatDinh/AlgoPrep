// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//0(3n) == 0(n)
function reverse(str) {
  var arr = str
    .split("")
    .reverse()
    .join("");
  return arr;
}

//0(n)
function reverse1(str) {
  let reversed = "";

  for (i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    reversed += char;
    debugger;
  }
  return reversed;
}

module.exports = reverse1;

reverse1("  abcd");
