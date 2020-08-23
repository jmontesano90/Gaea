const DnaHelper = {
  dnaKey: {
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
    G: [1],
    g: [2],
    H: [-1],
    h: [4],
    I: [-20],
    i: [-50],
    J: [35],
    j: [-5],
    K: [40],
    k: [-15],
    L: [20],
    l: [50],
    M: [30],
    m: [15],
    N: [3],
    n: [4],
    O: [2],
    o: [5],
    P: [2],
    p: [1],
  },

  breeding(dnaM, dnaD) {
    let dnaM2 = [];
    let dnaD2 = [];
    let dnaO = [];
    let i;
    let y;

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
  },

  getDNAValues(dna) {
    let DNAValues = {};
    let i;
    for (i = 0; i < dna.length; i += 2) {
      if (
        dna.charAt(i) === dna.charAt(i).toUpperCase() ||
        dna.charAt(i + 1) === dna.charAt(i).toUpperCase()
      ) {
        DNAValues[dna.charAt(i).toUpperCase()] = this.dnaKey[
          dna.charAt(i).toUpperCase()
        ];
      } else {
        DNAValues[dna.charAt(i).toUpperCase()] = this.dnaKey[
          dna.charAt(i).toLowerCase()
        ];
      }
    }
    return DNAValues;
  },
};

export default DnaHelper;

// grid: [
//   {
//     0: {
//       species: 2,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 1,
//       color: 'green',
//     },
//     1: {
//       species: 2,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 2,
//       color: 'green',
//     },
//     2: {
//       species: 1,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 3,
//       color: 'red',
//     },
//     3: {
//       species: 1,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 4,
//       color: 'red',
//     },
//   },
//   {
//     0: {
//       species: 0,
//       pGRI: 0,
//       nGRI: 0,
//       pBI: 0,
//       fNear: true,
//       wNear: false,
//       tileNumber: 5,
//     },
//     1: {
//       species: 1,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 6,
//       color: 'red',
//     },
//     2: {
//       species: 0,
//       pGRI: 0,
//       nGRI: 0,
//       pBI: 0,
//       fNear: true,
//       wNear: false,
//       tileNumber: 7,
//       water: true,
//       color: 'blue',
//     },
//     3: {
//       species: 3,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 8,
//       color: 'yellow',
//     },
//   },
//   {
//     0: {
//       species: 1,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 9,
//       color: 'red',
//     },
//     1: {
//       species: 1,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 10,
//       color: 'red',
//     },
//     2: {
//       species: 0,
//       pGRI: 0,
//       nGRI: 0,
//       pBI: 0,
//       fNear: true,
//       wNear: false,
//       tileNumber: 11,
//     },
//     3: {
//       species: 0,
//       pGRI: 0,
//       nGRI: 0,
//       pBI: 0,
//       fNear: true,
//       wNear: false,
//       tileNumber: 12,
//     },
//   },
//   {
//     0: {
//       species: 1,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 13,
//       color: 'red',
//     },
//     1: {
//       species: 0,
//       pGRI: 0,
//       nGRI: 0,
//       pBI: 0,
//       fNear: true,
//       wNear: false,
//       tileNumber: 14,
//     },
//     2: {
//       species: 1,
//       pGRI: 20,
//       nGRI: 10,
//       pBI: 200,
//       fNear: true,
//       wNear: false,
//       tileNumber: 15,
//       color: 'red',
//     },
//     3: {
//       species: 0,
//       pGRI: 0,
//       nGRI: 0,
//       pBI: 0,
//       fNear: true,
//       wNear: false,
//       tileNumber: 16,
//     },
//   },
// ],
