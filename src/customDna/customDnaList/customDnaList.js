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
        className='link'
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
        <h1>Custom DNA</h1>
        <h3>
          Here you will find a list of all the custom dna you have created!
        </h3>
        {customDna}
      </section>
    );
  }
}

export default CustomDnaList;
