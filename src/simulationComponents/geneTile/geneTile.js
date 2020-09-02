import React, { Component } from 'react';

class GeneTile extends Component {
  render() {
    let genes = this.props.location.state.listOfGenes.split('');
    console.log(this.props.location.state);
    let currentValues = genes.map((data, index) => (
      <section className='currentValues'>
        <div>
          <div>
            {data}: {this.props.location.state.data}
          </div>
        </div>
      </section>
    ));
    return (
      <div>
        <h2>{this.props.location.state.name}</h2>
        <section className='currentValues'>{currentValues}</section>
      </div>
    );
  }
}

export default GeneTile;
