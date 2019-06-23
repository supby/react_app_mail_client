import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row } from "react-bootstrap";
import "./App.css";
import EmailsList from "./components/EmailsList/EmailsList";

import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar {...this.props}/>
        {this.props.isAuthenticated && (
          <Container>
            <Row className="show-grid">
              <EmailsList />
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
