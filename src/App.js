import React, { Component } from 'react'
import './App.css'

import SearchBar from './components/SearchBar'
import EmailsList from './components/EmailsList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a className='navbar-brand' href='#'>Brand</a>
            </div>
            <div className='collapse navbar-collapse'>
              <form className='navbar-form navbar-left'>
                <SearchBar />
              </form>
            </div>
          </div>
        </nav>
        <div style={{marginTop: 100 + 'px'}} className='container'>
          <div className='row'>
            <div className='col-lg-2'>Left Pane</div>
            <div className='col-lg-6'>
              <EmailsList />
            </div>
            <div className='col-lg-2'>Right Pane</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
