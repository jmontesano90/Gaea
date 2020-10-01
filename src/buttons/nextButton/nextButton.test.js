import React from 'react';
import ReactDOM from 'react-dom';
import NextButton from './nextButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NextButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
