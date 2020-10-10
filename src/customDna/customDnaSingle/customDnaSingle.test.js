import React from 'react';
import ReactDOM from 'react-dom';
import CustomDnaSingle from './CustomDnaSingle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomDnaSingle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
