import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Projects from './Projects'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SocialLinks from './SocialLinks';
//import Navbar from './NavBar' <NavbarToggle />
import NavbarToggle from './NavBarToggle'
import Cv from './CvSection/Cv';
import About from './About';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render( <Router>     
      <NavbarToggle />   
      <Route exact path="/" component={App} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/SocialLinks" component={SocialLinks} />
      <Route exact path="/Cv" component={Cv} />
      <Route exact path="/About" component={About} />      
  </Router>,document.getElementById('root'));
