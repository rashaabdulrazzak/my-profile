import React, {Component} from 'react' ;
import SKILLS from '../data/skills';
import './cv.css';
import { MDBTypography,MDBContainer, MDBRow, MDBCol,MDBBox } from "mdbreact";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import LightSpeed from 'react-reveal';
class Skill extends Component{
  render() {
 
    const {skillName,rate}=this.props.project;
    return (
          <LightSpeed right>
           <li>        
         <div class="d-flex">
         <div  class="mr-auto p-2">{skillName}</div>
         <div class="p-2" style={{paddingLeft :'100px'}}><Rater total={5} rating={rate} interactive={false}/>   </div>    
         </div>       
        </li>   
          </LightSpeed>
    )
  }
}
class Skills extends Component {
  render(){
    return(      
      <MDBContainer className='z-depth-1 my-5 pt-5 pb-3 px-5'>
        <h3 className="font-weight-bold dark-grey-text pb-2">Technical Skills</h3>
        <hr className="my-4" />
        <MDBRow >
        <MDBCol>
            <ol>
            {
                SKILLS.map(skill => {
                return(
                <Skill key={skill.id} project = {skill}/>
                );
                })
            }    
            </ol>
        </MDBCol>
        </MDBRow>
      </MDBContainer>

    )
  }
}
export default  Skills 