import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login'
import { connect } from 'react-redux'
import credentials from '../config/credentials'
import { setAuth } from '../actions'

class Login extends Component {
  render () {
    const responseGoogle = (response) => {
      this.props.auth.setSession(response)
      this.props.setAuth(this.props.auth.isAuthenticated())
    }

    return (
      <GoogleLogin
        clientId={credentials.clientId}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        />)
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated }
}

const mapDispatchToProps = dispatch => {
  return {
    setAuth: isAuth => dispatch(setAuth(isAuth))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
