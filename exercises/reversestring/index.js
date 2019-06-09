// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var arr = str
    .split("")
    .reverse()
    .join("");
  debugger;
  return arr;
}
function reverse1(str) {
  debugger;
}

debugger;

module.exports = reverse1;

reverse("  abcd");
