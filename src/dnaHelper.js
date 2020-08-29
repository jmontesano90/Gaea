const DnaHelper = {
  dnaKey: {
    A: [10],
    a: [-5],
    B: [5],
    b: [-15],
    C: [10],
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
    N: [11],
    n: [16],
    O: [8],
    o: [16],
    P: [7],
    p: [14],
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
    let expressionValues = { 1: { A: 0 }, 2: {}, 3: {}, 4: {} };
    let dnaTemplate = 'AaBbCcDdEdFfGgHhIiJjKkLlMmNnOoPp';
    let m = 0;
    let n = 1;
    let key = '';
    for (n = 1; n < 5; n++) {
      for (m = 0; m < dnaTemplate.length; m++) {
        key = dnaTemplate.charAt(m);
        expressionValues[n][key] = 0;
      }
    }

    // let i = 0;
    // let allele;
    // for (i = 0; i < plants.length; i++) {
    //   let y;
    //   for (y = 0; y < plants[i].dna.length; y += 2) {
    //     if (
    //       plants[i].dna.charAt(y) === plants[i].dna.charAt(y).toUpperCase() ||
    //       plants[i].dna.charAt(y + 1) === plants[i].dna.charAt(y).toUpperCase()
    //     ) {
    //       allele = plants[i].dna.charAt[y].toUpperCase();
    //       expressionValues[plants[i].species][0].allele =
    //         parseInt(expressionValues[plants[i].species][0].allele) + 1;
    //     } else {
    //       allele = plants[i].dna.charAt[y].toLowerCase();
    //       expressionValues[plants[i].species][0].allele =
    //         parseInt(expressionValues[plants[i].species][0].allele) + 1;
    //     }
    //   }
    // }
    // console.log(expressionValues[plants[2].species][0].A + 1);
    return expressionValues;
  },

  randomDNAStrand() {
    let dnaTemplate = 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp';
    let dna = [];
    let i = 0;
    //console.log(dnaTemplate.charAt(i).toLowerCase());
    for (i = 0; i < dnaTemplate.length; i++) {
      if (Math.random() < 0.5) {
        dna.push(dnaTemplate.charAt(i).toUpperCase());
      } else dna.push(dnaTemplate.charAt(i).toLowerCase());
    }
    return dna.join('');
  },

  randomPlantGeneration() {
    let dna = [this.randomDNAStrand(), this.randomDNAStrand()];
    let species = 1;
    let gridNumber = 0;

    let grids = [
      [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
      [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
      [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
    ];
    let z = 1;
    for (z = 1; z < grids.length; z++) {
      if (
        grids[z] === null ||
        (grids[z][0] === grids[z - 1][0] && grids[z][1] === grids[z - 1][1])
      ) {
        grids[z] = [
          Math.round(Math.random() * 3),
          Math.round(Math.random() * 3),
        ];
      }
    }

    let tileNumber = grids[0][0] * 4 + grids[0][1] + 1;
    let plants = [];
    let plant = {};
    let i = 1;
    for (i = 1; i <= 17; i++) {
      if (i % 6 === 0) {
        console.log('New Species info');
        species += 1;
        gridNumber += 1;
        dna = [this.randomDNAStrand(), this.randomDNAStrand()];
        tileNumber = grids[gridNumber][0] * 4 + grids[gridNumber][1] + 1;
      }
      plant = {
        gridLoc: grids[gridNumber],
        dna: dna[Math.round(Math.random() * 1)],
        species: species,
        BioMass: 10,
        tileNumber: tileNumber,
        age: 0,
      };
      plants.push(plant);
    }
    console.log(plants[0]);
    return plants;
  },
};
export default DnaHelper;
