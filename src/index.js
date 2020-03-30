import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
ReactDOM.render(<App />, document.getElementById('root'));

/*ReactDOM.render( <Router  basename={"my-proile"}>     
      <NavbarToggle />   
      <Route exact path="/" component={App} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/SocialLinks" component={SocialLinks} />
      <Route exact path="/Cv" component={Cv} />
      
  </Router>,document.getElementById('root'));*/
