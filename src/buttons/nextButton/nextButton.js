import React, { Component } from 'react';
import GridContext from '../../GridContext';

class nextButton extends Component {
  static contextType = GridContext;
  //   timepass =  {
  //     this.context.value.timePass;
  //   };
  render() {
    return <button onClick={this.context.timePass}>Next!</button>;
  }
}

export default nextButton;
