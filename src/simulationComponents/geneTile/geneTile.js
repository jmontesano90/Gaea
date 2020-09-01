import React, { Component } from 'react';

class GeneTile extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.location.state.name}</h2>
      </div>
    );
  }
}

export default GeneTile;
