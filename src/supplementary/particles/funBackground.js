import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './funBackground.css';
class funBackground extends Component {
  render() {
    return (
      <Particles
        params={{
          polygon: {
            enable: true,
            type: 'inside',
            move: {
              radius: 10,
            },
            url: 'path/to/svg.svg',
          },
        }}
      />
    );
  }
}

export default funBackground;
