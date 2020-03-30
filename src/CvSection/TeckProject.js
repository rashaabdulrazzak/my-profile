import React,{Component} from 'react';
import PROJECTS from '../data/projects';
import LightSpeed from 'react-reveal';

import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText  } from "mdbreact";
class TeckProject extends Component {
  render(){
    return(
      <MDBContainer className='my-3 pt-3 pb-3 px-5' >
        <h3 className="font-weight-bold dark-grey-text pb-2">Technical Projects  </h3>
        <MDBRow>

          {
            PROJECTS.map(pproject => {
              return(<MDBRow>
                        <LightSpeed left>
                         <MDBCard className="mb-4" style={{ marginTop: "1rem" }}>
                            <MDBCardBody>
                            <MDBCardTitle>{pproject.title}</MDBCardTitle>
                            <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                              <a className="btn btn-pink" href={pproject.link} >
                                view
                            </a>
                            <MDBBtn className="default-color"><a href={pproject.github} style={{color:'white'}}>
                            source code
                            </a>
                            </MDBBtn>
                            </MDBCardTitle>
                            <MDBCardText>
                               {pproject.description} 
                            </MDBCardText>
                            
                            </MDBCardBody>
                           </MDBCard>
                         </LightSpeed>
                     </MDBRow>            
            );
            })
          }
         
         </MDBRow>
      </MDBContainer>
    )
  }
}
export default TeckProject 

