import React from 'react';
/* Add NavLink to importer */
import { NavLink } from 'react-router-dom';
/* Add basic styling for NavLinks */
/*const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}*/
 
/* add the navbar component */
const Navbar = () =>
  <nav className="navbar navbar-light light-blue lighten-4">
     <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
        className="fas fa-bars fa-1x"></i></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav mr-auto">
     <li className="nav-item">
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact     
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink></li>
    <li className="nav-item"><NavLink
      to="/projects"
      exact     
      activeStyle={{
        background: 'darkblue'
      }}
    >Portfolio</NavLink></li>
     <li className="nav-item"><NavLink
      to="/Cv"
      exact     
      activeStyle={{
        background: 'darkblue'
      }}
    >Cv</NavLink></li>
    <li className="nav-item"><NavLink
      to="/socialLinks"
      exact     
      activeStyle={{
        background: 'darkblue'
      }}
    >Contact Me</NavLink></li> 
      <li className="nav-item"> <NavLink
      to="/about"
      exact      
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink></li></ul>
    </div>
  </nav>;
  export default Navbar




