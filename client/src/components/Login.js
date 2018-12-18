import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'

export default class Login extends Component {
  render () {
    const responseGoogle = (response) => {
      this.props.auth.setSession(response)
    }

    return (
      <GoogleLogin
        clientId='727874724751.apps.googleusercontent.com'
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />)
  }
}
