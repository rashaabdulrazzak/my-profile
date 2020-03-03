import React, {Component} from 'react' ;
import PROJECTS from './data/projects';

class Project extends Component{
  render() {
    //<div>{this.props.project.title} </div>
    const {title,image,description,link}=this.props.project;
    return (
      <div style={{ display:'inline-block', width:300,margin:10}}>
        <h3>{title} </h3>
        <img src={image} alt='profile' style ={{ width:250,height:250}}/>
        <p> {description}</p>
        <a hef={link}> {link}</a>
      </div>
    )
  }
}
class Projects extends Component {
  render(){
    return(
      <div>
        <h2> Highlighted Projects  </h2>
        <div>

          {
            PROJECTS.map(pproject => {
              return(
              <Project key={pproject.id} project = {pproject}/>
            );
            })
          }
         </div>
      </div>
    )
  }
}
export default Projects
