//Renders the individual tile with a sprite
//Checks to see what species it is, and how many number of plants, then renders

import React, { Component } from 'react';
import './tile.css';
import GridContext from '../../GridContext';

class Tile extends Component {
  static contextType = GridContext;
  render() {
    let tileName = 'tile' + this.props.number;
    let image;
    let species;
    let currentPlants;

    if (this.props.grid) {
      if (this.props.grid.plantCount > 6) {
        currentPlants = 6;
      } else {
        currentPlants = this.props.grid.plantCount;
      }
      if (this.props.grid.species === 1) {
        species = 0 + currentPlants;
      } else if (this.props.grid.species === 2) {
        species = 6 + currentPlants;
      } else if (this.props.grid.species === 3) {
        species = 12 + currentPlants;
      } else {
        species = 0;
      }
      if (this.context.imageReady === true) {
        image = this.context.images[species].url;
      }
    }
    return (
      <section
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={`${tileName} tile`}
      ></section>
    );
  }
}

export default Tile;
