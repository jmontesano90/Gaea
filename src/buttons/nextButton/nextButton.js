//Renders the buttons used in the simulation
import React, { Component } from 'react';
import GridContext from '../../GridContext';
import './nextButton.css';

class nextButton extends Component {
  static contextType = GridContext;
  state = {
    onGoing: false,
  };

  goForwardByOne = () => {
    let i = 0;
    for (i = 0; i < 2; i++) {
      setTimeout(this.context.timePass, 10);
    }

    //this.props.history.replace('/simulation');
  };
  goForwardByTen = () => {
    let i = 0;
    for (i = 0; i < 10; i++) {
      setTimeout(this.context.timePass, 10);
    }
    this.props.history.replace('/simulation');
  };

  intervalId;

  startTheCycle = () => {
    this.intervalId = window.setInterval(this.goForwardByOne, 500);
    this.setState({ onGoing: true });
  };

  breakTheCycle = () => {
    clearInterval(this.intervalId);
    this.setState({ onGoing: false });
  };

  render() {
    let loading;
    let infiniteButton = <div></div>;
    let forwardByOne;
    let forwardbyTen;
    if (this.context.imageReady === false) {
      loading = <div className='loading'>Loading!</div>;
    } else {
      forwardByOne = (
        <button className='simulationButton' onClick={this.goForwardByOne}>
          &gt;
        </button>
      );

      forwardbyTen = (
        <button className='simulationButton' onClick={this.goForwardByTen}>
          &gt;&gt;&gt;
        </button>
      );

      if (this.state.onGoing === false) {
        infiniteButton = (
          <button className='simulationButton' onClick={this.startTheCycle}>
            &#8734;
          </button>
        );
      } else {
        infiniteButton = (
          <button className='simulationButton' onClick={this.breakTheCycle}>
            {' '}
            Stop
          </button>
        );
      }
    }
  

    return (
      <div className='buttonContainer'>
        <div className='simulationButtons'>
          {loading}
          {forwardByOne}
          <br></br>
          {forwardbyTen}
          {infiniteButton}
        </div>
      </div>
    );
  }
}

export default nextButton;
