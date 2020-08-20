exports.dnaKey = {
  A: [15],
  a: [-5],
  B: [10],
  b: [-15],
  C: [20],
  c: [-5],
  D: [15],
  d: [5],
  E: [40],
  e: [1],
  F: [15],
  f: [40],
  G: [2],
  g: [1],
  H: [4],
  h: [1],
};

export default function breeding(dnaM, dnaD) {
  let dnaM2 = [];
  let dnaD2 = [];
  let dnaO = [];

  for (i = 0; i < dnaM.length; i += 2) {
    dnaM2.push(dnaM.charAt(i + Math.round(Math.random())));
    dnaD2.push(dnaD.charAt(i + Math.round(Math.random())));
    //takes one gene from either each parent from each slot and puts the random gene picked in a new array
  }

  for (y = 0; y < dnaM2.length; y++) {
    dnaO.push(dnaM2[y]);
    dnaO.push(dnaD2[y]);
    //combines the new genes to form a child offspring
  }
  return dnaO.toString();
}
