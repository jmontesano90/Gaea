import React, { Component } from 'react';
import TileHolder from './simulationComponents/tileHolder/tileHolder';
import GridContext from './GridContext';
import DnaHelper from './dnaHelper';

class App extends Component {
  //Explanation of variables in grid
  //Species: species could be 1-4
  //pGRI: Positive growth rate influence on plants of the same species in adjacent grids
  //nGRI: Negative growth rate influence on plants of different species in adjacent grids
  //pBI: Positive breeding influence on plants of the same species in this grid
  //fNear: Friendly species in adjacent grid
  //wNear: water tile in adjacent grid
  //plants:  Points to the index in plant state showing which plants are in this grid
  state = {
    grid: [
      {
        0: {
          species: 2,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 1,
          color: 'green',
        },
        1: {
          species: 2,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 2,
          color: 'green',
        },
        2: {
          species: 1,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 3,
          color: 'red',
        },
        3: {
          species: 1,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 4,
          color: 'red',
        },
      },
      {
        0: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          fNear: true,
          wNear: false,
          tileNumber: 5,
        },
        1: {
          species: 1,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 6,
          color: 'red',
        },
        2: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          fNear: true,
          wNear: false,
          tileNumber: 7,
          water: true,
          color: 'blue',
        },
        3: {
          species: 3,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 8,
          color: 'yellow',
        },
      },
      {
        0: {
          species: 1,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 9,
          color: 'red',
        },
        1: {
          species: 1,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 10,
          color: 'red',
        },
        2: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          fNear: true,
          wNear: false,
          tileNumber: 11,
        },
        3: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          fNear: true,
          wNear: false,
          tileNumber: 12,
        },
      },
      {
        0: {
          species: 1,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 13,
          color: 'red',
        },
        1: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          fNear: true,
          wNear: false,
          tileNumber: 14,
        },
        2: {
          species: 1,
          pGRI: 20,
          nGRI: 10,
          pBI: 200,
          fNear: true,
          wNear: false,
          tileNumber: 15,
          color: 'red',
        },
        3: {
          species: 0,
          pGRI: 0,
          nGRI: 0,
          pBI: 0,
          fNear: true,
          wNear: false,
          tileNumber: 16,
        },
      },
    ],
    plants: [],
    turnData: [],
  };

  checkAdjacentGRI = (cord1, cord2) => {
    let GRITotal = 0;
    let water = false;
    if (cord1 - 1 >= 0) {
      //check above for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1 - 1][cord2].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1 - 1][cord2].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1 - 1][cord2].nGRI;
        console.log('Subtracting ' + this.state.grid[cord1 - 1][cord2].nGRI);
      }
      if (
        this.state.grid[cord1 - 1][cord2].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1 - 1][cord2].pGRI;
        console.log('Adding ' + this.state.grid[cord1 - 1][cord2].pGRI);
      }
      if (this.state.grid[cord1 - 1][cord2].water === true) {
        console.log('water one tile above');
        water = true;
      }
      console.log('One above');
    }

    if (cord1 + 1 <= 3) {
      //check below for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1 + 1][cord2].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1 + 1][cord2].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1 + 1][cord2].nGRI;
        console.log('Subtracting ' + this.state.grid[cord1 + 1][cord2].nGRI);
      }
      if (
        this.state.grid[cord1 + 1][cord2].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1 + 1][cord2].pGRI;
        console.log('Adding ' + this.state.grid[cord1 + 1][cord2].pGRI);
      }
      if (this.state.grid[cord1 + 1][cord2].water === true) {
        console.log('water one tile below');
        water = true;
      }
      console.log('One below');
    }

    if (cord2 - 1 >= 0) {
      //check below for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1][cord2 - 1].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1][cord2 - 1].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1][cord2 - 1].nGRI;
        console.log('Subtracting ' + this.state.grid[cord1][cord2 - 1].nGRI);
      }
      if (
        this.state.grid[cord1][cord2 - 1].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1][cord2 - 1].pGRI;
        console.log('Adding ' + this.state.grid[cord1][cord2 - 1].pGRI);
      }
      if (this.state.grid[cord1][cord2 - 1].water === true) {
        console.log('water one tile to the left');
        water = true;
      }
      console.log('One to the left');
    }

    if (cord2 + 1 <= 3) {
      //check below for a adjacent plants of opposite species to see if it negatively affects them
      if (
        this.state.grid[cord1][cord2 + 1].species !==
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1][cord2 + 1].species !== 0
      ) {
        GRITotal -= this.state.grid[cord1][cord2 + 1].nGRI;
        console.log('Subtracting ' + this.state.grid[cord1][cord2 + 1].nGRI);
      }
      if (
        this.state.grid[cord1][cord2 + 1].species ===
        this.state.grid[cord1][cord2].species
      ) {
        GRITotal += this.state.grid[cord1][cord2 + 1].pGRI;
        console.log('Adding ' + this.state.grid[cord1][cord2 + 1].pGRI);
      }
      if (this.state.grid[cord1][cord2 + 1].water === true) {
        console.log('water one tile to the right');
        water = true;
      }
      console.log('One to the right');
    }

    let info = [GRITotal, water];

    return info;
  };

  checkAdjacentEmpty(cord1, cord2) {
    let newCord1;
    let newCord2;
    let possible = true;
    let info = {};
    if (cord1 - 1 >= 0) {
      //check above to see if above is empty
      if (
        this.state.grid[cord1 - 1][cord2].species ===
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1 - 1][cord2].water === false
      ) {
        newCord1 = [cord1 - 1];
        newCord2 = [cord2];
        info = [newCord1, newCord2, possible];
        return info;
      }

      console.log('One above');
    }

    if (cord1 + 1 <= 3) {
      //check below to see if below is empty
      if (
        this.state.grid[cord1 + 1][cord2].species ===
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1 + 1][cord2].water === false
      ) {
        newCord1 = [cord1 + 1];
        newCord2 = [cord2];
        info = [newCord1, newCord2, possible];
        return info;
      }

      console.log('One below');
    }
    if (cord2 - 1 >= 0) {
      //check below to see if to the left is empty
      if (
        this.state.grid[cord1][cord2 - 1].species ===
          this.state.grid[cord1][cord2].species &&
        this.state.grid[cord1][cord2 - 1].water === false
      ) {
        newCord1 = [cord1];
        newCord2 = [cord2 - 1];
        info = [newCord1, newCord2, possible];
        return info;
      }

      console.log('One to the left');
    }

    if (cord2 + 1 <= 3) {
      //check below to see if to the right is empty
      if (
        this.state.grid[cord1][cord2 + 1].species ===
          this.state.grid[cord1][cord2].species ||
        this.state.grid[cord1][cord2 + 1].water === false
      ) {
        newCord1 = [cord1];
        newCord2 = [cord2 + 1];
        info = [newCord1, newCord2, possible];
        return info;
      }

      console.log('One to the right');
    } else {
      possible = false;
      return [newCord1, newCord2, possible];
    }
  }
  render() {
    let cord1 = 0;
    let cord2 = 2;
    //let dna1 = 'AaBBCCDdeeffgGhHiIjJlLJJKK';
    //let dna2 = 'AaBBCCDdeeffgGhHiIjJlLJJKK';
    //console.log(DnaHelper.breeding(dna1, dna2));
    //console.log(this.checkAdjacentGRI(cord1, cord2));
    //console.log(DnaHelper.getDNAValues(dna1));
    console.log(this.checkAdjacentEmpty(cord1, cord2));
    //console.log(this.state.grid[1][1].test);

    const value = {
      grid: this.state.grid,
      plants: this.state.plants,

      turnData: this.state.turnData,
      checkAdjacent: this.checkAdjacent,
    };
    return (
      <GridContext.Provider value={value}>
        <main className='App'>
          <TileHolder></TileHolder>
        </main>
      </GridContext.Provider>
    );
  }
}

export default App;
