import React from 'react';
import ReactDOM from 'react-dom';
import GeneTile from './GeneTile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GeneTile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
