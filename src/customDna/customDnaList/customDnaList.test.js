import React from 'react';
import ReactDOM from 'react-dom';
import CustomDnaList from './CustomDnaList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomDnaList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
