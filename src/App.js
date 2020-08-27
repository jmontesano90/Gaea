import React, { Component } from 'react';
import TileHolder from './simulationComponents/tileHolder/tileHolder';
import GridContext from './GridContext';
import DnaHelper from './dnaHelper';
import NextButton from './buttons/nextButton/nextButton';

class App extends Component {
  //Explanation of variables in grid
  //Species: species could be 1-4
  //pGRI: Positive growth rate influence on plants of the same species in adjacent grids
  //nGRI: Negative growth rate influence on plants of different species in adjacent grids
  //pBI: Positive breeding influence on plants of the same species in this grid
  //GRiTotal: Total of all influence from adjacent grids for growth
  //fNear: Friendly species in adjacent grid
  //wNear: water tile in adjacent grid
  //plants:  Points to the index in plant state showing which plants are in this grid
  state = {
    grid: [
      {
        0: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 1,
        },
        1: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 2,
        },
        2: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 3,
        },
        3: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 4,
        },
      },
      {
        0: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 5,
        },
        1: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 6,
        },
        2: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 7,
        },
        3: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 8,
        },
      },
      {
        0: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 9,
        },
        1: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 10,
        },
        2: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 11,
        },
        3: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 12,
        },
      },
      {
        0: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 13,
        },
        1: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 14,
        },
        2: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 15,
        },
        3: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          plantCount: 0,
          GRiTotal: 0,
          fNear: false,
          wNear: false,
          tileNumber: 16,
        },
      },
    ],
    plants: [
      {
        gridLoc: [1, 3],
        dna: 'AaBbCcdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 1,
        BioMass: 10,
        tileNumber: 8,
        age: 0,
      },
      {
        gridLoc: [1, 3],
        dna: 'AaBbCcdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 1,
        BioMass: 10,
        tileNumber: 8,
        age: 0,
      },
      {
        gridLoc: [1, 3],
        dna: 'AaBbCcdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 1,
        BioMass: 10,
        tileNumber: 8,
        age: 0,
      },
      {
        gridLoc: [1, 3],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 1,
        BioMass: 10,
        tileNumber: 8,
        age: 0,
      },
      {
        gridLoc: [1, 3],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 1,
        BioMass: 10,
        tileNumber: 8,
        age: 0,
      },
      {
        gridLoc: [1, 3],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 1,
        BioMass: 10,
        tileNumber: 8,
        age: 0,
      },
      {
        gridLoc: [3, 1],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 2,
        BioMass: 10,
        tileNumber: 14,
        age: 0,
      },
      {
        gridLoc: [3, 1],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 2,
        BioMass: 10,
        tileNumber: 14,
        age: 0,
      },
      {
        gridLoc: [3, 1],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 2,
        BioMass: 10,
        tileNumber: 14,
        age: 0,
      },
      {
        gridLoc: [3, 1],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 2,
        BioMass: 10,
        tileNumber: 14,
        age: 0,
      },
      {
        gridLoc: [3, 1],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 2,
        BioMass: 10,
        tileNumber: 14,
        age: 0,
      },
      {
        gridLoc: [3, 1],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 2,
        BioMass: 10,
        tileNumber: 14,
        age: 0,
      },
      {
        gridLoc: [0, 0],
        dna: 'aaBbcCddeEFfggHhIiJjkkLlmmNnOoPp',
        species: 3,
        BioMass: 10,
        tileNumber: 1,
        age: 0,
      },
      {
        gridLoc: [0, 0],
        dna: 'aaBbcCddeEFfggHhIiJjkkLlmmNnOoPp',
        species: 3,
        BioMass: 10,
        tileNumber: 1,
        age: 0,
      },
      {
        gridLoc: [0, 0],
        dna: 'aaBbcCddeEFfggHhIiJjkkLlmmNnOoPp',
        species: 3,
        BioMass: 10,
        tileNumber: 1,
        age: 0,
      },
      {
        gridLoc: [0, 0],
        dna: 'aaBbcCddeEFfggHhIiJjkkLlmmNnOoPp',
        species: 3,
        BioMass: 10,
        tileNumber: 1,
        age: 0,
      },
      {
        gridLoc: [0, 0],
        dna: 'aaBbcCddeEFfggHhIiJjkkLlmmNnOoPp',
        species: 3,
        BioMass: 10,
        tileNumber: 1,
        age: 0,
      },
      {
        gridLoc: [0, 0],
        dna: 'AaBbcCdDeEFfGgHhIiJjkkLlMmNnOoPp',
        species: 3,
        BioMass: 10,
        tileNumber: 1,
        age: 0,
      },
    ],
    turnData: [],
  };

  checkAdjacentGRI = (cord1, cord2) => {
    let GRITotal = 0;
    let water = false;
    let friendly = false;
    if (cord1 - 1 >= 0) {
      //check above for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1 - 1][cord2].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1 - 1][cord2].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1 - 1][cord2].nGRI;
        //console.log('Subtracting ' + this.state.grid[cord1 - 1][cord2].nGRI);
      }
      if (
        this.state.grid[cord1 - 1][cord2].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1 - 1][cord2].pGRI;
        friendly = true;
        //console.log('Adding ' + this.state.grid[cord1 - 1][cord2].pGRI);
      }
      if (this.state.grid[cord1 - 1][cord2].water === true) {
        //console.log('water one tile above');
        water = true;
      }
      //console.log('One above');
    }

    if (cord1 + 1 <= 3) {
      //check below for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1 + 1][cord2].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1 + 1][cord2].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1 + 1][cord2].nGRI;
        // console.log('Subtracting ' + this.state.grid[cord1 + 1][cord2].nGRI);
      }
      if (
        this.state.grid[cord1 + 1][cord2].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1 + 1][cord2].pGRI;
        friendly = true;
        //console.log('Adding ' + this.state.grid[cord1 + 1][cord2].pGRI);
      }
      if (this.state.grid[cord1 + 1][cord2].water === true) {
        //console.log('water one tile below');
        water = true;
      }
      //console.log('One below');
    }

    if (cord2 - 1 >= 0) {
      //check below for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1][cord2 - 1].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1][cord2 - 1].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1][cord2 - 1].nGRI;
        //console.log('Subtracting ' + this.state.grid[cord1][cord2 - 1].nGRI);
      }
      if (
        this.state.grid[cord1][cord2 - 1].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1][cord2 - 1].pGRI;
        friendly = true;
        //console.log('Adding ' + this.state.grid[cord1][cord2 - 1].pGRI);
      }
      if (this.state.grid[cord1][cord2 - 1].water === true) {
        //console.log('water one tile to the left');
        water = true;
      }
      //console.log('One to the left');
    }

    if (cord2 + 1 <= 3) {
      //check below for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1][cord2 + 1].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1][cord2 + 1].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1][cord2 + 1].nGRI;
        //console.log('Subtracting ' + this.state.grid[cord1][cord2 + 1].nGRI);
      }
      if (
        this.state.grid[cord1][cord2 + 1].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1][cord2 + 1].pGRI;
        friendly = true;
        //console.log('Adding ' + this.state.grid[cord1][cord2 + 1].pGRI);
      }
      if (this.state.grid[cord1][cord2 + 1].water === true) {
        //console.log('water one tile to the right');
        water = true;
      }
      //console.log('One to the right');
    }

    let info = [GRITotal, water, friendly];

    return info;
  };

  checkAdjacentEmpty(cord1, cord2) {
    let newCord1 = -1;
    let newCord2 = -1;
    let possible = false;
    let info = {};
    let direction = Math.round(Math.random() * 4);
    console.log(direction);

    if (direction === 1 && cord1 - 1 >= 0) {
      //check above to see if above is empty
      if (
        (this.state.grid[cord1 - 1][cord2].species ===
          this.state.grid[cord1][cord2].species &&
          this.state.grid[cord1 - 1][cord2].plantCount <= 6) ||
        this.state.grid[cord1 - 1][cord2].species === 0
      ) {
        newCord1 = [cord1 - 1];
        newCord2 = [cord2];
        possible = true;
        info = [newCord1, newCord2, possible];
        return info;
      }

      console.log('One above');
    }
    if (direction === 2 && cord1 + 1 <= 3) {
      //check below to see if below is empty
      if (
        (this.state.grid[cord1 + 1][cord2].species ===
          this.state.grid[cord1][cord2].species &&
          this.state.grid[cord1 + 1][cord2].plantCount <= 6) ||
        this.state.grid[cord1 + 1][cord2].species === 0
      ) {
        newCord1 = [cord1 + 1];
        newCord2 = [cord2];
        possible = true;
        info = [newCord1, newCord2, possible];
        return info;
      }

      console.log('One below');
    }
    if (direction === 3 && cord2 - 1 >= 0) {
      //check below to see if to the left is empty
      if (
        (this.state.grid[cord1][cord2 - 1].species ===
          this.state.grid[cord1][cord2].species &&
          this.state.grid[cord1][cord2 - 1].plantCount <= 6) ||
        this.state.grid[cord1][cord2 - 1].species === 0
      ) {
        newCord1 = [cord1];
        newCord2 = [cord2 - 1];
        possible = true;
        info = [newCord1, newCord2, possible];
        return info;
      }

      console.log('One to the left');
    }
    if (direction === 4 && cord2 + 1 <= 3) {
      //check below to see if to the right is empty
      if (
        (this.state.grid[cord1][cord2 + 1].species ===
          this.state.grid[cord1][cord2].species &&
          this.state.grid[cord1][cord2 + 1].plantCount <= 6) ||
        this.state.grid[cord1][cord2 + 1].species === 0
      ) {
        newCord1 = [cord1];
        newCord2 = [cord2 + 1];
        possible = true;
        info = [newCord1, newCord2, possible];
        return info;
      } else {
        return [newCord1, newCord2, possible];
      }
      console.log('One to the right');
    } else {
      return [newCord1, newCord2, possible];
    }
  }

  selfGridCheck() {
    //iterate over all the grids and check what plants are in them, and what their self buffs are
    //then once that is done, check how this affects each other
    let grid = this.state.grid;
    let i = 0;
    //console.log(this.state.grid);
    grid.map((tileRow, index) => {
      for (i = 0; i < 4; i++) {
        grid[index][i].plantCount = 0;
        grid[index][i].pBI = 0;
        grid[index][i].nGRI = 0;
        grid[index][i].pGRI = 0;
      }
    });

    this.state.plants.map((data, index) => {
      let dna = DnaHelper.getDNAValues(data.dna);
      grid[data.gridLoc[0]][data.gridLoc[1]].pGRI += dna.C[0] + dna.D[0];
      grid[data.gridLoc[0]][data.gridLoc[1]].nGRI += dna.A[0] + dna.B[0];
      grid[data.gridLoc[0]][data.gridLoc[1]].pBI += dna.E[0] + dna.F[0];
      grid[data.gridLoc[0]][data.gridLoc[1]].species = data.species;
      grid[data.gridLoc[0]][data.gridLoc[1]].plantCount += 1;
    });

    grid.map((tileRow, index) => {
      for (i = 0; i < 4; i++) {
        let check = this.checkAdjacentGRI(index, i);
        grid[index][i].GRiTotal = check[0];
        grid[index][i].wNear = check[1];
        grid[index][i].fNear = check[2];
      }
    });
    return grid;
  }
  updateGrid = (grid) => {
    this.setState({ grid: grid });
  };

  plantCheck() {
    //This function performs a lot, so I'll paraphrase its purpose here
    //first checks the plants lifespan vs its current to see if its dies at the end of this turn
    //Then grows according to its own growth rate plus the grids self buff/debuff for gr
    //increase the age of the plant by one
    //checks to see if its viable to breed, then breeds compatible species
    let plants = this.state.plants;
    //console.log(plants);
    let dna;
    let grimReapersToDo = [];
    let maturePlants = [];
    //plants.splice(index, 1);
    plants.map((plant, index) => {
      dna = DnaHelper.getDNAValues(plant.dna);
      if (plant.age > dna.N[0] + dna.O[0] + dna.P[0]) {
        grimReapersToDo.push(index);
      } else {
        let gri =
          dna.K[0] +
          dna.L[0] +
          dna.M[0] +
          this.state.grid[plant.gridLoc[0]][plant.gridLoc[1]].GRiTotal / 4;
        plant.BioMass += gri;
        if (plant.BioMass < 0 || plant.BioMass > 1500) {
          grimReapersToDo.push(index);
        } else {
          plant.age += 1;
        }
        if (plant.BioMass >= 200) {
          maturePlants.push(plant);
        }

        //console.log(grimReapersToDo);
        //console.log(maturePlants[1]);
      }
    });
    //console.log('Mature Plants');
    //console.log(maturePlants);
    let i;
    let breedingLottery = [];
    if (maturePlants.length > 1) {
      breedingLottery.push(maturePlants[0]);
      //console.log('Breeding lottery');
      //console.log(breedingLottery);
      for (i = 0; i < maturePlants.length; i++) {
        if (
          maturePlants[i].tileNumber === breedingLottery[0].tileNumber &&
          maturePlants.length - 1 > i
        ) {
          //console.log('Add plant to breeding lottery');
          breedingLottery.push(maturePlants[i]);
        } else {
          let y = 0;
          //console.log(i);
          let dna = DnaHelper.getDNAValues(maturePlants[i].dna);
          //console.log(dna);
          let plantI = parseInt(dna.E) + parseInt(dna.F);
          //console.log(plantI);
          let lotteryWinners = [];
          for (y = 0; y < breedingLottery.length; y++) {
            let gridI =
              this.state.grid[breedingLottery[y].gridLoc[0]][
                breedingLottery[y].gridLoc[1]
              ].pBI / 3;
            let breedingChance = (plantI + gridI) / 300;
            //console.log('Rolling to breed...');
            //console.log(breedingChance);
            if (breedingChance > Math.random()) {
              lotteryWinners.push(breedingLottery[y]);
              //console.log('Plant entered the breeding lottery!');
            }
          }
          //console.log(breedingLottery);
          let z = 0;
          for (z = 1; z < lotteryWinners.length; z += 2) {
            console.log(lotteryWinners[z].dna);
            console.log(lotteryWinners[z - 1].dna);
            let childDna = DnaHelper.breeding(
              lotteryWinners[z].dna,
              lotteryWinners[z - 1].dna
            );
            if (lotteryWinners[z].dna === lotteryWinners[z - 1].dna.length) {
            }
            let newPlant = {
              gridLoc: lotteryWinners[z].gridLoc,
              dna: childDna,
              species: parseInt(lotteryWinners[z].species),
              BioMass: 10,
              tileNumber: parseInt(lotteryWinners[z].tileNumber),
              age: 0,
            };
            console.log(parseInt(newPlant.gridLoc[0]));
            //console.log('New Plant Added!');
            //plants.push(newPlant);
            //console.log(lotteryWinners[z]);
            // console.log(
            //   this.state.grid[lotteryWinners[z].gridLoc[0]][
            //     lotteryWinners[z].gridLoc[1]
            //   ].plantCount
            // );
            if (
              this.state.grid[lotteryWinners[z].gridLoc[0]][
                lotteryWinners[z].gridLoc[1]
              ].plantCount >= 4
            ) {
              //console.log(' Lottery winners: ');
              //console.log(lotteryWinners);
              //console.log(lotteryWinners[z].gridLoc[1]);
              let chanceAtMigration = Math.random();
              //console.log(chanceAtMigration);
              if (chanceAtMigration > 0.3) {
                //console.log('attempting to put new plant in a different grid');
                console.log(lotteryWinners[z]);
                console.log(lotteryWinners[z].gridLoc[0]);
                console.log(lotteryWinners[z].gridLoc[1]);
                let newH = this.checkAdjacentEmpty(
                  parseInt(lotteryWinners[z].gridLoc[0]),
                  parseInt(lotteryWinners[z].gridLoc[1])
                );
                console.log(newH);
                if (newH[2] === true) {
                  let newHome = [newH[0], newH[1]];
                  newPlant.gridLoc = newHome;
                  plants.push(newPlant);
                  breedingLottery = [];
                  breedingLottery.push(maturePlants[i]);
                  //console.log('New PLant added in a different grid!');
                  //console.log(newPlant);
                }
              }
            } else if (
              this.state.grid[lotteryWinners[z].gridLoc[0]][
                lotteryWinners[z].gridLoc[1]
              ].plantCount < 6
            ) {
              console.log('New Plant Added in same grid!');
              breedingLottery = [];
              breedingLottery.push(maturePlants[i]);
              plants.push(newPlant);
            } else {
              breedingLottery = [];
              breedingLottery.push(maturePlants[i]);
              console.log('No Room for new plant!');
            }
          }
        }
      }
    }
    //console.log(grimReapersToDo);
    let m = 0;
    while (m < grimReapersToDo.length) {
      plants.splice(grimReapersToDo[m], 1);
      m++;
    }
    // console.log(this.state.grid);
    // console.log(plants);
    plants.sort((a, b) => (a.tileNumber > b.tileNumber ? 1 : -1));
    return plants;
  }

  updatePlants = (plants) => {
    this.setState({ plants: plants });
  };

  timePass = () => {
    let updatedGrid = this.selfGridCheck();
    //console.log(updatedGrid);
    this.updateGrid(updatedGrid);
    let updatedPlants = this.plantCheck();
    //console.log(updatedPlants);
    this.updatePlants(updatedPlants);
    // console.log('    ');
    // console.log('    ');
    // console.log('    ');
    // console.log('    ');
    // console.log('New Turn');
  };

  render() {
    // let cord1 = 0;
    // let cord2 = 3;
    let dna1 = 'AaBBCCDdeeffgGhHiIjJlLJJKK';
    let dna2 = 'AaBBCCDdeeffgGhHiIjJlLJJKK';
    // let dna3 = '';
    console.log(DnaHelper.breeding(dna1, dna2));
    //console.log(this.checkAdjacentGRI(cord1, cord2));
    //console.log(DnaHelper.getDNAValues(dna1));
    //console.log(this.checkAdjacentEmpty(cord1, cord2));
    //console.log(this.state.grid[1][1].test);
    //this.selfGridCheck();
    //this.plantCheck();

    const value = {
      grid: this.state.grid,
      plants: this.state.plants,
      timePass: this.timePass,
      turnData: this.state.turnData,
      checkAdjacent: this.checkAdjacent,
    };
    return (
      <GridContext.Provider value={value}>
        <main className='App'>
          <TileHolder></TileHolder>
          <NextButton></NextButton>
        </main>
      </GridContext.Provider>
    );
  }
}

export default App;
