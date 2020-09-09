import React, { Component } from 'react';
// import './customDnaList.css';
import GridContext from '../../GridContext';

class CustomDnaSingle extends Component {
  static contextType = GridContext;

  render() {
    return (
      <section>
        <h1>Custom DNA</h1>
        <h3>{this.props.location.state.name}</h3>
        <h4>{this.props.location.state.dnaStrand}</h4>
        <h4>{this.props.location.state.comment}</h4>
      </section>
    );
  }
}

export default CustomDnaSingle;
