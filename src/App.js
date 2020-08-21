import React, { Component } from 'react';
import TileHolder from './simulationComponents/tileHolder/tileHolder';
import GridContext from './GridContext';

class App extends Component {
  state = {
    grid: [
      {
        0: { species: 1, pGRI: 20, nGRI: 10, color: 'red' },
        1: { species: 0, pGRI: 0, nGRI: 0 },
        2: { species: 0, pGRI: 0, nGRI: 0 },
        3: { species: 0, pGRI: 0, nGRI: 0 },
      },
      {
        0: { species: 2, pGRI: 10, nGRI: 10, color: 'blue' },
        1: { species: 1, pGRI: 40, nGRI: 0, color: 'red' },
        2: { species: 1, pGRI: 20, nGRI: 0, color: 'red' },
        3: { species: 0, pGRI: 0, nGRI: 0 },
      },
      {
        0: { species: 0, pGRI: 0, nGRI: 0 },
        1: { species: 1, pGRI: 40, nGRI: 50, color: 'red' },
        2: { species: 0, pGRI: 0, nGRI: 0 },
        3: { species: 0, pGRI: 0, nGRI: 0 },
      },
      {
        0: { species: 0, pGRI: 0, nGRI: 0 },
        1: { species: 3, pGRI: 80, nGRI: -30, color: 'green' },
        2: { species: 3, pGRI: 80, nGRI: -30, color: 'green' },
        3: { species: 0, pGRI: 0, nGRI: 0 },
      },
    ],
    plants: [],
    turnData: [],
  };

  checkAdjacent = (cord1, cord2) => {
    let pGRITotal = 0;
    let nGRITotal = 0;
    let GRITotal = 0;
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
      console.log('One to the right');
    }

    return GRITotal;
  };
  render() {
    let cord1 = 2;
    let cord2 = 1;
    console.log(this.checkAdjacent(cord1, cord2));
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
