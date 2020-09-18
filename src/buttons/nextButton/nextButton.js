import React, { Component } from 'react';
import GridContext from '../../GridContext';
import './nextButton.css';

class nextButton extends Component {
  static contextType = GridContext;
  state = {
    break: false,
  };
  keepItRolling = () => {
    this.startTheCycle();
    let i = 0;
    let y = 1;
    while (i < y) {
      if (this.state.break === true) {
        break;
      } else {
        setTimeout(this.context.timePass, 500);
        i++;
        y++;
      }
    }
  };
  goForwardByOne = () => {
    let i = 0;
    for (i = 0; i < 2; i++) {
      setTimeout(this.context.timePass, 10);
    }

    this.props.history.replace('/simulation');
  };
  goForwardByTen = () => {
    let i = 0;
    for (i = 0; i < 10; i++) {
      setTimeout(this.context.timePass, 10);
      //console.log(i);
    }
    this.props.history.replace('/simulation');
  };

  intervalId;

  startTheCycle = () => {
    this.intervalId = window.setInterval(this.context.timePass, 500);
  };

  breakTheCycle = () => {
    clearInterval(this.intervalId);
  };

  // startTheCycle = () => {
  //   this.setState({ break: false });
  // };
  // breakTheCycle = () => {
  //   this.setState({ break: true });
  // };
  // continueButton = () =>  {
  //   this.context.timePass;
  //   this.props.history.push('./simulation');
  // };

  render() {
    let restartButton = <div></div>;
    if (this.context.turnData.length !== 0) {
      restartButton = (
        <button className='restartButton' onClick={this.context.restart}>
          Restart
        </button>
      );
    }

    return (
      <div className='buttonContainer'>
        <section className='simulationButtons'>
          <button className='simulationButton' onClick={this.goForwardByOne}>
            &gt;
          </button>
          <br></br>
          <button className='simulationButton' onClick={this.goForwardByTen}>
            &gt;&gt;&gt;
          </button>
          <button className='simulationButton' onClick={this.startTheCycle}>
            &#8734;
          </button>
          <button className='simulationButton' onClick={this.breakTheCycle}>
            {' '}
            NO
          </button>
        </section>
        <section className='simulationButtons'>{restartButton}</section>
      </div>
    );
  }
}

export default nextButton;
