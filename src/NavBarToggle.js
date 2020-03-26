import React, { Component } from 'react';
import { MDBNav ,MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';

class NavbarToggle extends Component {
state = {
  collapse1: false,
  collapseID: ''
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

render() {
  return ( 
       <MDBNav className="justify-content-center bg-color  navbar-expand-sm navbar-dark fixed-top transparent py-1">
      <MDBNavItem>
        <MDBNavLink  activeStyle={{ background: '#2125291f'}} className="white-text font-weight-bold py-3 "active to="/" exact >Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink  activeStyle={{ background: '#2125291f'}} className="white-text font-weight-bold py-3 " to="/projects" exact >Portfolio</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink  activeStyle={{ background: '#2125291f'}} className="white-text font-weight-bold py-3" to="/Cv" exact >Cv</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink  activeStyle={{ background: '#2125291f'}} className="white-text font-weight-bold py-3" to="/socialLinks"  exact > Contact Me</MDBNavLink>
      </MDBNavItem>
    </MDBNav>

   
    );
  }
}

export default NavbarToggle;
