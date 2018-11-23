import React, { Component } from 'react';
import { authStatus } from '../services/AuthService';
import PreLoader from '../elements/PreLoader';

export default class StartScreen extends Component {
  state = { 
    isLoggedIn: false
  }

  async componentDidMount(){
    const isAuthenticated = await authStatus();
    this.props.navigation.navigate(isAuthenticated ? 'UserStack' : 'GuestStack');
  }

  render() {
    return <PreLoader />
  }
}
