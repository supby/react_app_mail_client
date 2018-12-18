import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import EmailsList from './components/EmailsList'
import Login from './components/Login'

class App extends Component {
  goTo (route) {
    this.props.history.replace(`/${route}`)
  }

  login () {
    this.props.auth.login()
  }

  logout () {
    this.props.auth.logout()
  }

  render () {
    const { isAuthenticated } = this.props.auth

    return (
      <div className='App'>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='/'>Brand</a>
            </div>
            {
              isAuthenticated() && (
                <div className='collapse navbar-collapse'>
                  <form className='navbar-form navbar-left'>
                    <SearchBar />
                  </form>
                </div>
              )
            }

            {
              !isAuthenticated() && (
                <Login auth={this.props.auth} />
                )
            }
          </div>
        </nav>
        {
              isAuthenticated() && (
                <div style={{marginTop: 100 + 'px'}} className='container'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <EmailsList />
                    </div>
                  </div>
                </div>
              )
          }
      </div>
    )
  }
}

export default App
