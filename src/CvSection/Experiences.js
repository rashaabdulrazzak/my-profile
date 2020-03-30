import React, {Component} from 'react' ;
import EXPERIENCES from '../data/experiences';
import './cv.css';
import { MDBTypography,MDBContainer, MDBRow, MDBCol,MDBBox } from "mdbreact";
import LightSpeed from 'react-reveal';
class Experience extends Component{
  render() {
 
    const {id,title,company,country,description}=this.props.project;
    return (
      
         <li class="step-element pb-0">
            <div className="step-number">
            <span className="number">{id}</span>
            </div>
            <div className="step-excerpt">
            <MDBTypography tag='h4' variant="h4" className="font-weight-bold dark-grey-text mb-3"> {company} / {country}</MDBTypography>
              <MDBBox tag='p' >{title}</MDBBox>
              <MDBBox tag='p'className="text-muted">{description}</MDBBox>
            </div>
          </li>   
        
    )
  }
}
class Experiences extends Component {
  render(){
    return(      
      <MDBContainer>
         <LightSpeed left>
        <h3 class="font-weight-bold dark-grey-text pb-2">EMPLOYMENT HISTORY</h3>
        <hr class="my-4" />
          </LightSpeed>
        <MDBRow>
        <MDBCol md={8} s={12}>
           <LightSpeed left>
            <ol class="step pl-0">
            {
                EXPERIENCES.map(pproject => {
                return(
                <Experience key={pproject.id} project = {pproject}/>
                );
                })
            }    
            </ol>
            </LightSpeed>
        </MDBCol>
        </MDBRow>
      </MDBContainer>

    )
  }
}
export default  Experiences 