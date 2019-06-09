// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

var now = require("performance-now");

function reverse(str) {
  var arr = str
    .split("")
    .reverse()
    .join("");
  debugger;
  return arr;
}


var time = t1 - t0;
debugger;

module.exports = reverse;

reverse("  abcd");
