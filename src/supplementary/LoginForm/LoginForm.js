import React, { Component } from 'react';
import { Button, Input } from '../../utils/Utils';
import TokenService from '../../services/token-service';
import './LoginForm.css';
import AuthApiService from '../../services/auth-api-service';
import GridContext from '../../GridContext';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = '';
    password.value = '';
    this.props.onLoginSuccess();
    this.props.history.push('/home');
  };

  render() {
    const { error } = this.state;
    return (
      <form className='LoginForm' onSubmit={this.handleSubmitBasicAuth}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>User name</label>
          <Input name='user_name' id='LoginForm__user_name'></Input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>Password</label>
          <Input
            name='password'
            type='password'
            id='LoginForm__password'
          ></Input>
        </div>
        <Button type='submit'>Login</Button>
      </form>
    );
  }
}
