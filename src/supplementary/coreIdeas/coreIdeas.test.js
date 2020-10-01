import React from 'react';
import ReactDOM from 'react-dom';
import CoreIdeas from '../../supplementary/coreIdeas/coreIdeas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CoreIdeas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
