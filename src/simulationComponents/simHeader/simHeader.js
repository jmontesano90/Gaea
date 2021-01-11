import React, { Component } from 'react';
import GridContext from '../../GridContext';
import './simHeader.css';

class simHeader extends Component {

static contextType = GridContext;

    render() {

            let restartButton = <div></div>;
    if (this.context.turnData && this.context.turnData.length !== 0) {
      restartButton = (
        <button className='simulationButton' onClick={this.context.restart}>
          Restart
        </button>
      );
    }

        let dayCount;

    if (this.context.turnData && this.context.turnData.length / 2 === 1) {
      dayCount = (
        <div className='dayCountContainer'>
          <div className='dayCount'>1 day has passed.</div>
        </div>
      );
    } else if (this.context.turnData && this.context.turnData.length / 2 > 1) {
      dayCount = (
        <div className='dayCountContainer'>
          <div className='dayCount'>
            {Math.round(this.context.turnData.length / 2)} days have passed.
          </div>
        </div>
      );
    }


        return(<div className='simHeader'>{dayCount}<div className='dayCountContainer'>{restartButton}</div></div>)
    }
}
export default simHeader;