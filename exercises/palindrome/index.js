// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  var reversed = "";
  var isPalindrome = false;
  reversed = reverse(str);
  if (str == reversed) {
    isPalindrome = true;
    debugger;
  }
  return isPalindrome;
}

function reverse(str) {
  var reversed = "";
  for (i = str.length - 1; i >= 0; i--) {
    var char = str[i];
    reversed += char;
  }
  return reversed;
}

module.exports = palindrome;
