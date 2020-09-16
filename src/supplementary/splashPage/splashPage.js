import React, { Component } from 'react';
import './splashPage.css';
import RegistrationForm from '../registrationForm/registrationForm';

class SplashPage extends Component {
  render() {
    return (
      <section id='outerSection'>
        <main role='main'>
          <header role='banner' className='splashPageTitle'>
            <h1>Gaea</h1>
            <h2>Ecology Simulator</h2>
          </header>

          <section className='splashSection'>
            <h3>
              Watch multiple species of plants grow and compete in real time!
            </h3>
            <img
              src='https://imgur.com/2kdA34r.png'
              alt='Example Plants'
              className='grid'
            ></img>
            <p>
              Gaea is a tool meant to demonstrate in real time the very basics
              of Natural Selection, and in turn teach you about evolution while
              also giving a brief overview of Mendelian Genetics. In short,
              watch plants grow, compete and reproduce in real time!
            </p>
          </section>

          <section className='splashSection'>
            <header>
              <h3>Help learn the basis of evolution!</h3>
            </header>
            <p>
              At a very basic level, evolution is the slow change of what genes
              are being expressed in a species over a long period of time.{' '}
              <b>
                More favorable traits are passed down, less favorable traits are
                expressed less or lost over time.
              </b>{' '}
              As the simulation runs, plants with less favorable traits will
              breed less and die off, while those with favorable traits will
              live and continue to reproduce. You can check specific traits such
              as Life span, growth rate and others and watch them change in real
              time!
            </p>
          </section>

          <section className='splashSection'>
            <header>
              <h3>Create your own custom Plant Species!</h3>
            </header>

            <p>
              Once you're comfortable with how the site works, you can make your
              own custom DNA strand and load it into a plant species! Can you
              make a successful plant species?
            </p>
          </section>
          <section className='splashSection'>
            <header>
              <h3>Sign up here to make custom plant species!</h3>
            </header>
            <RegistrationForm
              id='register'
              history={this.props.history}
            ></RegistrationForm>
          </section>
        </main>
      </section>
    );
  }
}

export default SplashPage;
