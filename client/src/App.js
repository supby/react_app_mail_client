import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Nav, Navbar, FormGroup, Grid, Row } from 'react-bootstrap'
import './App.css'
import SearchBar from './components/SearchBar'
import EmailsList from './components/EmailsList'
import Login from './components/Login'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#brand'>Mail</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                {
                  this.props.isAuthenticated && (<SearchBar />)
                }
              </FormGroup>
            </Navbar.Form>
            <Nav pullRight>
              {
                !this.props.isAuthenticated && (<Login auth={this.props.auth} />)
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {
              this.props.isAuthenticated && (
                <Grid>
                  <Row className='show-grid'>
                    <EmailsList />
                  </Row>
                </Grid>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated }
}

const mapDispatchToProps = dispatch => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
