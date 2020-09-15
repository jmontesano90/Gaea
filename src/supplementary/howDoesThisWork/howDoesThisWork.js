import React, { Component } from 'react';

import './howDoesThisWork.css';
class HowDoesThisWork extends Component {
  render() {
    return (
      <section className='homePage'>
        <h1>How does this work?</h1>
        <p>Every single plant has its own DNA strand, biomass, and age.</p>
        <p>
          At the very start, each species is randomly dropped in a grid with 6
          newborn plants. Each species is given two randomly generated DNA
          strands. This is to help encourage gene diversity so every species is
          not composed entirely of clones!
        </p>
        <p>
          Every “turn” plants grow according to their growth rate (determined by
          their genes) and the buffs and debuffs by adjacent plants. Friendly
          plants (generally) give a growth rate bonus, while plants of the
          opposite species give a growth rate penalty. Once plants grow enough
          and hit a threshold they become mature enough to reproduce. At this
          point every “turn” they have a chance to reproduce, if another plant
          is mature in their same tile. When two plants mate, their offspring is
          a combination of the parents.This will continue until the plants die
          of old age.
        </p>
        <p>
          Plants exchange DNA and express traits given the guidelines of
          Mendelian genetics, which can be read about{' '}
          <a href='https://knowgenetics.org/mendelian-genetics/'>here</a>
        </p>
      </section>
    );
  }
}

export default HowDoesThisWork;
