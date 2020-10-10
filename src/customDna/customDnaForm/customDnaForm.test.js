import React from 'react';
import ReactDOM from 'react-dom';
import CustomDnaForm from './CustomDnaForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomDnaForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
