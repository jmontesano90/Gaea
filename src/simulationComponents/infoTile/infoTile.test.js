import React from 'react';
import ReactDOM from 'react-dom';
import InfoTile from './InfoTile';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <InfoTile />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
