import React, { Component } from 'react';
import './customDnaList.css';
import GridContext from '../../GridContext';
import { Link } from 'react-router-dom';

class CustomDnaList extends Component {
  static contextType = GridContext;

  render() {
    let customDna = this.context.customDna.map((data, index) => (
      <Link
        className='link SBG backUp strand'
        to={{
          state: {
            name: data.name,
            dnaStrand: data.dnaStrand,
            comment: data.comment,
            key: index,
          },
          pathname: `/customDnaList/${data.name}`,
        }}
      >
        {data.name}
      </Link>
    ));
    return (
      <section>
        <h1 className='SBG top backUp'>Custom DNA</h1>
        <h3 className='SBG backUp'>
          Here you will find a list of all the custom dna you have created!
        </h3>
        <h5 className='SBG infoTablet backUp'>
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
