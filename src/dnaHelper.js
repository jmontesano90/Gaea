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
    E: [60],
    e: [1],
    F: [30],
    f: [80],
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
    N: [4],
    n: [6],
    O: [3],
    o: [7],
    P: [3],
    p: [4],
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

    return dnaO.join('');
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

  getDNAExppressionValues(plants) {
    let expressionValues = {
      1: [
        {
          A: [0],
          a: [0],
          B: [0],
          b: [0],
          C: [0],
          c: [0],
          D: [0],
          d: [0],
          E: [0],
          e: [0],
          F: [0],
          f: [0],
          G: [0],
          g: [0],
          H: [0],
          h: [0],
          I: [0],
          i: [0],
          J: [0],
          j: [0],
          K: [0],
          k: [0],
          L: [0],
          l: [0],
          M: [0],
          m: [0],
          N: [0],
          n: [0],
          O: [0],
          o: [0],
          P: [0],
          p: [0],
        },
      ],
      2: [
        {
          A: [0],
          a: [0],
          B: [0],
          b: [0],
          C: [0],
          c: [0],
          D: [0],
          d: [0],
          E: [0],
          e: [0],
          F: [0],
          f: [0],
          G: [0],
          g: [0],
          H: [0],
          h: [0],
          I: [0],
          i: [0],
          J: [0],
          j: [0],
          K: [0],
          k: [0],
          L: [0],
          l: [0],
          M: [0],
          m: [0],
          N: [0],
          n: [0],
          O: [0],
          o: [0],
          P: [0],
          p: [0],
        },
      ],
      3: [
        {
          A: [0],
          a: [0],
          B: [0],
          b: [0],
          C: [0],
          c: [0],
          D: [0],
          d: [0],
          E: [0],
          e: [0],
          F: [0],
          f: [0],
          G: [0],
          g: [0],
          H: [0],
          h: [0],
          I: [0],
          i: [0],
          J: [0],
          j: [0],
          K: [0],
          k: [0],
          L: [0],
          l: [0],
          M: [0],
          m: [0],
          N: [0],
          n: [0],
          O: [0],
          o: [0],
          P: [0],
          p: [0],
        },
      ],
      4: [
        {
          A: [0],
          a: [0],
          B: [0],
          b: [0],
          C: [0],
          c: [0],
          D: [0],
          d: [0],
          E: [0],
          e: [0],
          F: [0],
          f: [0],
          G: [0],
          g: [0],
          H: [0],
          h: [0],
          I: [0],
          i: [0],
          J: [0],
          j: [0],
          K: [0],
          k: [0],
          L: [0],
          l: [0],
          M: [0],
          m: [0],
          N: [0],
          n: [0],
          O: [0],
          o: [0],
          P: [0],
          p: [0],
        },
      ],
    };
    let i = 0;
    let allele;
    for (i = 0; i < plants.length; i++) {
      let y;
      for (y = 0; y < plants[i].dna.length; y += 2) {
        if (
          plants[i].dna.charAt(y) === plants[i].dna.charAt(y).toUpperCase() ||
          plants[i].dna.charAt(y + 1) === plants[i].dna.charAt(y).toUpperCase()
        ) {
          allele = plants[i].dna.charAt[y].toUpperCase();
          expressionValues[plants[i].species][0].allele =
            parseInt(expressionValues[plants[i].species][0].allele) + 1;
        } else {
          allele = plants[i].dna.charAt[y].toLowerCase();
          expressionValues[plants[i].species][0].allele =
            parseInt(expressionValues[plants[i].species][0].allele) + 1;
        }
      }
    }
    console.log(expressionValues[plants[2].species][0].A + 1);
    return expressionValues;
  },
};
export default DnaHelper;
