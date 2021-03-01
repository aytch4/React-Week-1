import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="shadow" color="white" light>
          <Nav>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contacts</NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
