const DnaHelper = {
  dnaKey: {
    A: [-2],
    a: [6],
    B: [7],
    b: [-15],
    C: [20],
    c: [-5],
    D: [30],
    d: [15],
    E: [60],
    e: [2],
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
    K: [50],
    k: [-15],
    L: [40],
    l: [70],
    M: [40],
    m: [25],
    N: [13],
    n: [19],
    O: [14],
    o: [20],
    P: [8],
    p: [23],
  },

  traitExplanation: {
    nGRi:
      'nGRi stands for Negative Growth Rate Influence, and these genes determine how much of a negative impact this plant will have on adjacent plants of differing species.  Higher numbers have a larger impact, negative numbers actually help other species of plants.  Above are the numeric values for what these genes represent.  While the numbers themselves are not particularity useful to you,  their relative difference is!',
    pGRi:
      'pGRi stands for Positive Growth Rate Influence, and these genes determine how much of a positive influence this plant has on adjacent plants of the same species.  Higher is better.  Above are the numeric values for what these genes represent.  While the numbers themselves are not particularity useful to you,  their relative difference is!',
    pBi:
      'pBi stands for Positive Breeding Influence, and these genes increase the chances of breeding for plants in the same tile.  Higher is better.  Above are the numeric values for what these genes represent.  While the numbers themselves are not particularity useful to you,  their relative difference is!',
    GR:
      'GR stands for Growth Rate, and these genes influence how much biomass is gained per "turn".  This stat is influenced by pGRi and nGRi.  Plants will not breed until they hit a biomass treshold, so having a higher growth rate means they will start breeding earlier.  Above are the numeric values for what these genes represent.  While the numbers themselves are not particularity useful to you,  their relative difference is!',
    LS:
      'LS stands for Life Span, and these genes influence how long the plants stay alive.  Above are the numeric values for what these genes represent.  While the numbers themselves are not particularity useful to you,  their relative difference is!',
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
      1: { total: 0 },
      2: { total: 0 },
      3: { total: 0 },
      4: { total: 0 },
    };

    let dnaTemplate = 'AaBbCcDdEedFfGgHhIiJjKkLlMmNnOoPp';
    let m = 0;
    let n = 1;
    let key = '';
    for (n = 1; n < 5; n++) {
      for (m = 0; m < dnaTemplate.length; m++) {
        key = dnaTemplate.charAt(m);
        expressionValues[n][key] = 0;
      }
    }

    let z = 0;
    for (z = 0; z < plants.length; z++) {
      expressionValues[plants[z].species].total++;
    }

    let i = 0;
    let gene = '';
    for (i = 0; i < plants.length; i++) {
      let y;
      for (y = 0; y < plants[i].dna.length; y += 2) {
        if (
          plants[i].dna.charAt(y) === plants[i].dna.charAt(y).toUpperCase() ||
          plants[i].dna.charAt(y + 1) === plants[i].dna.charAt(y).toUpperCase()
        ) {
          gene = plants[i].dna.charAt(y).toUpperCase();
          expressionValues[plants[i].species][gene] =
            parseInt(expressionValues[plants[i].species][gene]) + 1;
        } else {
          gene = plants[i].dna.charAt(y).toLowerCase();
          expressionValues[plants[i].species][gene] =
            parseInt(expressionValues[plants[i].species][gene]) + 1;
        }
      }
    }

    return expressionValues;
  },

  randomDNAStrand() {
    let dnaTemplate = 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp';
    let dna = [];
    let i = 0;
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
      [Math.round(Math.random() * 1), Math.round(Math.random() * 1)],
      [Math.round(Math.random() * 1), Math.round(Math.random() * 1) + 2],
      [Math.round(Math.random() * 1) + 2, Math.round(Math.random() * 3)],
    ];
    let z = 1;
    let hackFrauds = 0;
    for (hackFrauds = 0; hackFrauds < grids.length; hackFrauds++) {
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
    }

    let tileNumber = grids[0][0] * 4 + grids[0][1] + 1;
    let plants = [];
    let plant = {};
    let i = 0;
    for (i = 0; i < 18; i++) {
      if (i % 6 === 0 && i !== 0) {
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
    return plants;
  },
  customPlantGeneration(customDna) {
    let dna = [customDna, customDna];
    let species = 1;
    let gridNumber = 0;

    let grids = [
      [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
      [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
      [Math.round(Math.random() * 3), Math.round(Math.random() * 3)],
    ];
    let z = 1;
    let hackFrauds = 0;
    for (hackFrauds = 0; hackFrauds < grids.length; hackFrauds++) {
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
    }

    let tileNumber = grids[0][0] * 4 + grids[0][1] + 1;
    let plants = [];
    let plant = {};
    let i = 0;
    for (i = 0; i < 18; i++) {
      if (i % 6 === 0 && i !== 0) {
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
    return plants;
  },
};
export default DnaHelper;
