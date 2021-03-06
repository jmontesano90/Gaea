import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class Nav extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  };

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'
          className='log'
          style={{ textDecoration: 'none' }}
        >
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link to='/login' className='log' style={{ textDecoration: 'none' }}>
          Log in
        </Link>
      </div>
    );
  }
  render() {
    return (
      <div className='nav'>
        <nav>
          <div className='navOptions'>
            <Link
              to='/home'
              className='icon'
              style={{ textDecoration: 'none' }}
            >
              <img alt='logo' src='https://imgur.com/MBeiHN0.jpg'></img>
            </Link>

            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </nav>
      </div>
    );
  }
}
