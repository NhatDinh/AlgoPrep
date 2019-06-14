// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  console.log((splitted = str.split(" ")));
  for (let index = 0; index < splitted.length; index++) {
    element = uppercaseFL(splitted[index]);
    splitted[index] = element;
  }
  str = splitted.join(" ");
  return str;
}

function uppercaseFL(str) {
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}
capitalize("look, it is working!");

module.exports = capitalize;
