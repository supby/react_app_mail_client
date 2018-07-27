import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';

class App extends Component {

  handleSearch(searchQuery) {        
      alert(searchQuery);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>
            <div className="collapse navbar-collapse">
              <form className="navbar-form navbar-left">
                <SearchBar handleSearch={this.handleSearch.bind(this)} />
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
        </div>
      </div>
    );
  }
}

export default App;
