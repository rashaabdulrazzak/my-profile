import React,{Component} from 'react';
import PROJECTS from '../data/projects';
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText  } from "mdbreact";
class TeckProject extends Component {
  render(){
    return(
      <MDBContainer className='my-3 pt-3 pb-3 px-5' >
        <h2>Technical Projects  </h2>
        <MDBRow>

          {
            PROJECTS.map(pproject => {
              return(<MDBRow> 
                         <MDBCard className="w-75 mb-4" style={{ marginTop: "1rem" }}>
                            <MDBCardBody>
                            <MDBCardTitle>{pproject.title}</MDBCardTitle>
                            <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                              <a href={pproject.link} className="card-link">
                                view
                            </a>
                            <MDBBtn color="aqua"><a href={pproject.github}  className="card-link">
                            source code
                            </a>
                            </MDBBtn>
                            </MDBCardTitle>
                            <MDBCardText>
                               {pproject.description} 
                            </MDBCardText>
                            
                            </MDBCardBody>
                        </MDBCard>
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

