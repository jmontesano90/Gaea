import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import { Button, Input, Required } from '../../utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import GridContext from '../../GridContext';

export default class RegistrationForm extends Component {
  state = { error: null };
  static contextType = GridContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { user_name, password } = ev.target;

    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    );
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(() => {
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        }).then((res) => {
          console.log('Step 1');
          TokenService.saveAuthToken(res.authToken);
          AuthApiService.getUserId(user_name.value)
            .then((data) => {
              this.context.updateUserId(data.id);
            })
            .then(() => this.context.handleUpdateDna());

          user_name.value = '';
          password.value = '';

          this.props.history.replace('/home');
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className='RegistrationForm' onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name <Required />
          </label>
          <Input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'
          ></Input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password <Required />
          </label>
          <Input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'
          ></Input>
        </div>
        <Button type='submit'>Register</Button>
      </form>
    );
  }
}
