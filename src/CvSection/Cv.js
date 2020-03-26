import React from 'react';
import Experiences from './Experiences';
import Skills from "./Skills";
import TeckProject from './TeckProject';
import Education from './Education'
import { MDBContainer, MDBRow, MDBCol  } from "mdbreact";


const Cv =()=><MDBContainer className='z-depth-1 my-5 pt-5 pb-3 px-5' > 
  <MDBRow>
      <MDBCol>
          <h3 classNane="font-weight-bold dark-grey-text pb-2">Summary </h3>     
          <p> Software developer with a passion for developing websites that help people and make them comfortable when diving into them With experience in Html5,Css3, JavaScript, and React, I discovered web development through my working in a tech company as a project manager. I bring strong skills in team-building and project management that help the company to deliver its projects on time and make sure every person does his role. Also at the same company,I work as a junior frontend developer which let me get a full view of the difficulties that the team may face and enrich my knowledge in that field.</p>
          <hr className="my-4" />
      </MDBCol>
       </MDBRow>
      <TeckProject/>
      <Skills/>
    
      <Experiences/>
       <hr className="my-4" />
      <Education/>
 
</MDBContainer>
export default Cv