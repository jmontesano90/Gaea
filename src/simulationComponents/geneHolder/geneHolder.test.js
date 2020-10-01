import React from 'react';
import ReactDOM from 'react-dom';
import GeneHolder from './GeneHolder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GeneHolder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
