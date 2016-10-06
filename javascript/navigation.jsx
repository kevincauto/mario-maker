import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';


export default class Navigation extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Super Mario Maker</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Sign-Up for Contests</NavItem>
            <NavItem eventKey={2} href="#">Sign-Up for Level Races</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
