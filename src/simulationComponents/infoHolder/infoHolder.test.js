import React from 'react';
import ReactDOM from 'react-dom';
import InfoHolder from './InfoHolder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InfoHolder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
