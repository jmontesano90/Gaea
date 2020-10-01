import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from '../../supplementary/registrationForm/registrationForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegistrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
