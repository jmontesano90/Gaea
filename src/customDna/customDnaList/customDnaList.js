import React, { Component } from 'react';
import './customDnaList.css';
import GridContext from '../../GridContext';
import { Link } from 'react-router-dom';

class CustomDnaList extends Component {
  static contextType = GridContext;

  render() {
    console.log(this.context.customDna);
    let customDna = this.context.customDna.map((data, index) => (
      <Link
        className='link '
        to={{
          state: {
            name: data.name,
            dnaStrand: data.dnaStrand,
            comment: data.comment,
          },
          pathname: `/customDnaList/${data.name}`,
        }}
      >
        {data.name}
      </Link>
    ));
    return (
      <section>
        <h1 className='SBG top'>Custom DNA</h1>
        <h3 className='SBG'>
          Here you will find a list of all the custom dna you have created!
        </h3>
        <h5 className='SBG infoTablet'>
          Click one of your custom DNA strands, and then load it into the
          simulation! Once loaded, it will be injected into the Red plant
          species and watch it play out!{' '}
        </h5>
        {customDna}
      </section>
    );
  }
}

export default CustomDnaList;
