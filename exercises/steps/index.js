// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  /*
        0123
     0 '#   ' 
     1 '##  '
     2 '### '
     3 '####'
    */
  const STEP_SHAPE = `#`;
  const SPACE = ` `;
  //0(N^2) - BAD
  for (let row = 0; row < n; row++) {
    let stair = ``;
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += STEP_SHAPE;
      } else {
        stair += SPACE;
      }
    }
    console.log(stair);
  }
}

steps(3);

module.exports = steps;
