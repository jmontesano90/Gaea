import React from 'react';
import ReactDOM from 'react-dom';
import HowDoesThisWork from './HowDoesThisWork';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HowDoesThisWork />, div);
  ReactDOM.unmountComponentAtNode(div);
});
