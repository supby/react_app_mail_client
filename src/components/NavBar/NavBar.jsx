import React from 'react'
import { Nav, Navbar, Form } from 'react-bootstrap'
import Login from '../Login/Login'
import SearchBar from '../SearchBar/SearchBar'

export default (props) => (<Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
            <a href='#brand'>Mail</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Form pullLeft>
            <Form.Group>
                { props.isAuthenticated && (<SearchBar />) }
            </Form.Group>
        </Form>
        <Nav pullRight>
            { !props.isAuthenticated && (<Login auth={props.auth} />) }
        </Nav>
    </Navbar.Collapse>
</Navbar>)