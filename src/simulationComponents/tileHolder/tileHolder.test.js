import React from 'react';
import ReactDOM from 'react-dom';
import TileHolder from './TileHolder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TileHolder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
