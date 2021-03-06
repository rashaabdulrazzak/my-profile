import React,{Component} from 'react'
import Projects from './Projects'
import { HashRouter,BrowserRouter as Router, Route } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import NavbarToggle from './NavBarToggle'
import Cv from './CvSection/Cv';
import Home from './Home'

class App extends Component{
render(){ 
  return(
    <div>
   <HashRouter basename='/'>     
      <NavbarToggle />   
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/SocialLinks" component={SocialLinks} />
      <Route exact path="/Cv" component={Cv} />
      
  </HashRouter>
  </div>)}
 
}
export default App;
