import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <section>
        <h1>Gaea</h1>
        <Link
          to={{
            pathname: `/simulation`,
          }}
        >
          Run a Simulation!
        </Link>
        <Link
          to={{
            pathname: `/GettingStarted`,
          }}
        >
          Getting Started
        </Link>
        <Link
          to={{
            pathname: `/CoreIdeas`,
          }}
        >
          Core Ideas to keep in mind
        </Link>
        <Link
          to={{
            pathname: `/HowThisWorks`,
          }}
        >
          How This Works
        </Link>
      </section>
    );
  }
}

export default HomePage;
