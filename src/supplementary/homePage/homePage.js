import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import GridContext from '../../GridContext';
import TokenService from '../../services/token-service';
class HomePage extends Component {
  static contextType = GridContext;
  render() {
    let customDna;
    // console.log(this.context);
    if (this.context.customDna.length >= 1) {
      customDna = (
        <Link
          className='link'
          to={{
            pathname: `/customDnaList`,
          }}
        >
          Custom Dna List
        </Link>
      );
    }
    let customDnaForm = (
      <div>Log in to be able to make custom dna strands!</div>
    );

    if (TokenService.hasAuthToken() === true) {
      customDnaForm = (
        <Link
          className='link'
          to={{
            pathname: `/customDnaForm`,
          }}
        >
          Custom Dna Form
        </Link>
      );
    }
    return (
      <section className='homePage'>
        <h1>Gaea</h1>
        <Link
          className='link'
          to={{
            pathname: `/simulation`,
          }}
        >
          Run a Simulation!
        </Link>
        <Link
          className='link'
          to={{
            pathname: `/GettingStarted`,
          }}
        >
          Getting Started
        </Link>
        <Link
          className='link'
          to={{
            pathname: `/CoreIdeas`,
          }}
        >
          Core Ideas to keep in mind
        </Link>
        <Link
          className='link'
          to={{
            pathname: `/HowThisWorks`,
          }}
        >
          How This Works
        </Link>
        {customDnaForm}
        {customDna}
      </section>
    );
  }
}

export default HomePage;
