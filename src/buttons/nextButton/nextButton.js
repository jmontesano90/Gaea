import React, { Component } from 'react';
import GridContext from '../../GridContext';
import './nextButton.css';
import DnaHelper from '../../dnaHelper';

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
  startTheCycle = () => {
    this.setState({ break: false });
  };
  breakTheCycle = () => {
    this.setState({ break: true });
  };

  render() {
    console.log(this.context);
    // let restartButton = <div></div>;
    // if (this.context.turnData.length !== 0) {
    //   restartButton = (
    //     <button
    //       onClick={this.context.updatePlants(DnaHelper.randomPlantGeneration)}
    //     >
    //       Restart
    //     </button>
    //   );
    // }

    return (
      <section className='simulationButtons'>
        <button onClick={this.context.timePass}>Next!</button>
        <button onClick={this.keepItRolling}>Watch it go!</button>
        <button onClick={this.breakTheCycle}>Stop</button>
        {/* {restartButton} */}
      </section>
    );
  }
}

export default nextButton;
