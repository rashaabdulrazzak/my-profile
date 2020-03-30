import React,{Component} from 'react';
import EDUCATIONS from '../data/education';
import { MDBContainer, MDBRow ,MDBCol} from "mdbreact";
import LightSpeed from 'react-reveal';

class TeckProject extends Component {
  render(){
    return(
      <MDBContainer className='z-depth-1 my-5 pt-5 pb-3 px-5' >
      <LightSpeed left>     
        <h3 classNane="font-weight-bold dark-grey-text pb-2">Education</h3>  
         <hr className="my-4" />
        <MDBRow>
          <MDBCol>                
          {
            EDUCATIONS.map(edu => {
              return(<MDBRow> 
                     <div>
                           <LightSpeed right>
                        <h4>{edu.name} | {edu.year}</h4>
                        <p>{edu.specialization}</p>
                    </LightSpeed>
                     </div>
                     </MDBRow>            
            );
            })
          }         
          </MDBCol>
         </MDBRow>
       </LightSpeed>
      </MDBContainer>
    )
  }
}
export default TeckProject 

