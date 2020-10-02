import React from 'react';
import ReactDOM from 'react-dom';
import CoreIdeas from './coreIdeas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoreIdeas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
