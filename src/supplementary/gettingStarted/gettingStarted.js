//Renders the getting started, and explains to users the basic principles of the site
import React, { Component } from 'react';
import './gettingStarted.css';
class GettingStarted extends Component {
  render() {
    return (
      <section className='homePage'>
        <h1 className='SBG'>Getting Started</h1>
        <h2 className='SBG'>Welcome to Gaea!</h2>
        <p>
          Gaea is a tool meant to demonstrate in real time the very basics of
          Natural Selection, and in turn teach you about evolution while also
          giving a brief overview of Mendelian Genetics. To get the best out of
          Gaea, keep the following concepts in mind.
        </p>
        <div>
          {' '}
          <ul className='backUp SBG'>
            <li>
              Natural selection doesn’t necessarily mean the strongest survives,{' '}
              <b>it simply means the one who reproduces the most.</b>{' '}
            </li>
            <li>
              At a very basic level, evolution is the slow change of what genes
              are being expressed in a species over a long period.{' '}
              <b>
                More favorable traits are passed down, less favorable traits are
                expressed less or lost over time.
              </b>
            </li>
          </ul>
        </div>

        <p>
          With these two core concepts in mind, you can start utilizing Gaea to
          witness how these things function in an environment! Gaea will spawn 3
          species of plants (with randomized DNA strands) randomly within the
          field, and they will grow and breed naturally! Generally, the very
          beginning of the simulation is the most tumultuous with one or two
          species quickly being overtaken. This is an ideal time to see natural
          selection, as you can witness what traits succeed in real-time.
        </p>
        <p>
          Initially when you start just run the simulation several times to get
          an idea of how things work. Then you should start delving into the
          Gene expression to try and explain why certain species do poorly. Once
          you get more accustomed to it, you should be able to accurately
          predict which species will do poorly!
        </p>
        <h2 className='SBG titleAlign'>Easy things to look for!</h2>
        <p>
          Initially when you start just run the simulation several times to get
          an idea of how things work. Then you should start delving into the
          Gene expression to try and explain why certain species do poorly. Once
          you get more accustomed to it, you should be able to accurately
          predict which species will do poorly!{' '}
        </p>

        <p>
          It's important to note that if the original values show 100% for a
          recessive gene, that means the dominant gene does not exist for that
          species and can never become present! This is due to how Mendelian
          genetics works.{' '}
          <a href='https://knowgenetics.org/mendelian-genetics/'>
            Go here for a further explanation.
          </a>
        </p>
      </section>
    );
  }
}

export default GettingStarted;
