import React, { Component } from 'react';
import GridContext from '../../GridContext';
import './customDnaSingle.css';

class CustomDnaSingle extends Component {
  static contextType = GridContext;

  customStart = () => {
    this.context.customStart(this.props.location.state.dnaStrand);
    this.props.history.push('/simulation');
  };

  render() {
    return (
      <section className='customDnaSingle SBG backUp'>
        <h3>{this.props.location.state.name}</h3>
        <h4>{this.props.location.state.dnaStrand}</h4>
        <h4>{this.props.location.state.comment}</h4>
        <button onClick={this.customStart}>Load this DNA</button>
      </section>
    );
  }
}

export default CustomDnaSingle;
