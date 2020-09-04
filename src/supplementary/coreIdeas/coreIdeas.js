import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './coreIdeas.css';
class CoreIdeas extends Component {
  render() {
    return (
      <section className='homePage'>
        <h1>Core Ideas to Keep in Mind</h1>
        <p>The point of Gaea is to try and hammer home some core concepts:</p>
        <ul>
          <li>
            Natural selection doesn’t necessarily mean the strongest survives,{' '}
            <b>it simply means the one who reproduces the most.</b>
          </li>
          <li>
            At a very basic level, evolution is the slow change of what genes
            are being expressed in a species over a long period of time.
            <b>
              More favorable traits are passed down, less favorable traits are
              expressed less or lost over time.
            </b>
          </li>
        </ul>
        <p>
          Here I’d just like to expand on these two points to help make sure you
          as the user understand what to be looking for
        </p>
        <h2>Natural Selection/Biological Fitness</h2>
        <p>
          At its core natural selection says that the most biologically fit
          individual succeeds. But what is biological fitness? We’re not talking
          about how much an adult male Silverback Gorilla could theoretically
          deadlift or other similar feats of strength. Biological fitness is
          simply determined by how many progeny a member of a species has.
          Granted this means this means this is only relative when comparing
          members of the same species, (just because roaches have hundreds of
          babies doesn’t make them inherently more fit than squirrels for
          example).
        </p>
        <p>
          The reason biological fitness is the most important aspect of natural
          selection is simple, the more offspring an individual has, the more
          offspring their offspring will have, and so on and so forth. All other
          metrics are significantly less important. Imagine a fish that is the
          fastest member of its species by far, it's so fast none of the natural
          predators can catch him. One would imagine that this individual would
          perform well in the grand scheme of evolution, however due to his
          speed he gets more attention from predators than his slower brethren,
          and has to expend far more energy simplifying staying alive than they
          do. Thus his slower comrades can devote more energy to reproduction.
        </p>
        <p>
          While this is a hypothetical situation, many similar situations have
          been documented.{' '}
          <a href='https://www.nationalgeographic.com/news/2015/09/150911-blind-cavefish-animals-science-vision-evolution/'>
            The Mexican Blind Cavefish “de-evolved” eyesight as they no longer
            need it
          </a>
          ,{' '}
          <a href='https://www.sciencedirect.com/science/article/pii/S0960982208005125'>
            three spine stickleback fish have lost and re-evolved armor plating
            several times
          </a>
          and many more! The takeaway is that at the end of the day the one
          having more offspring is going to be more successful. This can be seen
          when you run the simulations because sometimes the most successful
          plant species will have some very poor traits, but because its traits
          allow it to reproduce faster than the other two it wins out.
        </p>
        <h2>Evolution</h2>
        <p>
          Evolution is an incredibly complex and interesting subject but we’re
          going to focus on one very small aspect of it, and it can be
          considered the very core for understanding how evolution works. So now
          that we know the most biologically fit individuals produce more
          progeny which creates a positive feedback loop, and as that happens,
          the overall genetic make up of the species gradually changes over
          time. This is a very slow and imperceptible process most of the time,
          but small changes in gene frequency can happen very fast, sometimes
          even in only a generation or two.
        </p>

        <p>
          <a href='https://askabiologist.asu.edu/peppered-moth'>
            A classic example of this is the Peppered Moth
          </a>
          , Prior to the industrial revolution most of the Peppered moths were
          primarily white. However once large amounts of factories started
          popping up in England, that began to change. Peppered moths became
          primarily black, how could that be? Well the soot and ash thrown off
          from the factories rested on the same trees as the Peppered Moths.
          White moths used to blend in perfectly, but now with all the black
          soot they stuck out like a sore thumb and were heavily targeted by
          predators. And in a few short generations the black became the
          predominant color.
        </p>
        <p>
          These are things to keep a lookout for while using Gaea, which traits
          change over time? Which traits benefit an individual? Which are bad
          for them? Can you even universally say if a trait is bad or not in
          different scenarios?
        </p>
      </section>
    );
  }
}

export default CoreIdeas;
