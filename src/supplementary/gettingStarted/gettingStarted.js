import React, { Component } from 'react';
import './gettingStarted.css';
class GettingStarted extends Component {
  render() {
    return (
      <section className='homePage'>
        <h1>Getting Started</h1>
        <h3>Welcome to Gaea!</h3>
        <p>
          Gaea is a tool meant to demonstrate in real time the very basics of
          Natural Selection, and in turn teach you about evolution while also
          giving a brief overview of Mendelian Genetics. To get the best out of
          Gaea, keep the following concepts in mind.
        </p>
        <ul>
          <li>
            Natural selection doesn’t necessarily mean the strongest survives,
            <b>it simply means the one who reproduces the most.</b>{' '}
          </li>
          <li>
            At a very basic level, evolution is the slow change of what genes
            are being expressed in a species over a long period of time.{' '}
            <b>
              More favorable traits are passed down, less favorable traits are
              expressed less or lost over time.
            </b>
          </li>
        </ul>
        <p>
          With these two core concepts in mind you can start utilizing Gaea to
          witness how these things function in an environment! So Gaea will
          spawn 3 species of plants (with randomized dna strands) randomly
          within the field, and generally the very beginning of the simulation
          is the most tumultuous. This is an ideal time to see natural
          selection, as generally one or two species quickly perish while one
          takes over.
        </p>
        <p>
          Initially when you start just run the simulation several times to get
          an idea how things look. Then you should start delving into the Gene
          expression to try and explain why certain species do poorly. Once you
          get more accustomed to it, you should be able to accurately predict
          which species will do poorly!
        </p>
        <p>
          <h4>But how do I do that, there's so much going on!</h4>
          It’s not as bad as it seems! Every trait has an explanation beneath it
          of how it functions in the simulation. I’d recommend just trying to
          focus on one trait initially, perhap nGRi (Negative growth rate
          influence) for example. Negative growth rate influence means any other
          species in an adjacent tile grows slower. So if on the initial seeding
          of plants you see one species is adjacent to both other species it is
          likely it will do poorly compared to them.
        </p>
        <p>
          However it's important to check what genes they have and what genes
          are being expressed, as it's possible they actually have a negative
          nGRi, meaning that they actually help adjacent plants!
        </p>
        <p>
          <h4>Some easy things to look out for.</h4>
          I’d recommend just trying to focus on one trait initially, LS (Life
          Span). This trait is very easy to interpret, longer life span means
          more chances to breed, so longer life span will almost always succeed.
          As you can see if you can check the trait values, all the recessive
          traits are much better than the dominant genes in this case. So
          despite being rare to express they should become more prominent over
          time. Simply let the simulation run a minute and check the remaining
          species, they will almost assuredly be expressing the recessive traits
          for LS in higher numbers then they started. An excellent example of
          Natural Selection!{' '}
        </p>
        <p>
          It's important to note that if the original values show 100% for a
          recessive gene, that means the dominant gene does not exist for that
          species and can never become present! Go here for a further
          explanation.
        </p>
      </section>
    );
  }
}

export default GettingStarted;
