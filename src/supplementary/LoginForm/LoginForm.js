//Renders the login form

import React, { Component } from 'react';
import { Button, Input } from '../../utils/Utils';
import TokenService from '../../services/token-service';
import './LoginForm.css';
import AuthApiService from '../../services/auth-api-service';
import GridContext from '../../GridContext';

export default class LoginForm extends Component {
  state = { error: null };
  static contextType = GridContext;
  handleSubmitBasicAuth = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );

    user_name.value = '';
    password.value = '';

    this.props.history.replace('/home');
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        AuthApiService.getUserId(user_name.value)
          .then((data) => {
            this.context.updateUserId(data.id);
          })
          .then(() => this.context.handleUpdateDna());

        user_name.value = '';
        password.value = '';

        this.props.history.replace('/home');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div id='outerSection'>
        <form className='LoginForm SBG' onSubmit={this.handleSubmitJwtAuth}>
          <div role='alert'>{error && <p className='red'>{error}</p>}</div>
          <div className='user_name'>
            <label htmlFor='LoginForm__user_name '>User name</label>
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
        <h4 className='SBG fakeLogin'>
          Want to log in without signing up? Try our demo log in account:
          <span>User name: TestAccount</span>
          <span>Password: TestAccount10!</span>
        </h4>
      </div>
    );
  }
}
