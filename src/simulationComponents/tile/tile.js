import React, { Component } from 'react';
import './tile.css';
import GridContext from '../../GridContext';

class Tile extends Component {
  static contextType = GridContext;
  render() {
    let tileName = 'tile' + this.props.number;
    // let transparency = this.props.grid.plantCount / 6;

    // let color;
    let image;
    let species;
    let currentPlants;

    if (this.props.grid.plantCount > 6) {
      currentPlants = 6;
    } else {
      currentPlants = this.props.grid.plantCount;
    }
    if (this.props.grid.species === 1) {
      species = 0 + currentPlants;
      // color = 'red';
    } else if (this.props.grid.species === 2) {
      species = 6 + currentPlants;
      // color = 'blue';
    } else if (this.props.grid.species === 3) {
      species = 12 + currentPlants;
      // color = 'green';
    } else {
      species = 0;
      // color = 'gray';
    }
    //console.log(species);
    if (this.context.imageReady === true) {
      image = this.context.images[species].url;
    }

    return (
      <section
        // style={{ backgroundColor: `${color}`, opacity: `${transparency}` }}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className={`${tileName} tile`}
      >
        {/* <img className='tileImage' src={image}></img> */}
      </section>
    );
  }
}

export default Tile;
