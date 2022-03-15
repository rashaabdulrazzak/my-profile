import React, { Component } from "react";
import PROJECTS from "./data/projects";
import {
  MDBContainer,
  MDBCardImage,
  MDBTypography,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import "./Projectstyle.css";
import Fade from "react-reveal";

class Project extends Component {
  render() {
    const { id, title, image, description, link, github } = this.props.project;
    return (
      <MDBCol top="10" size={4} key={id}>
        <Fade left>
          <MDBCard>
            <MDBCardImage className="img-fluid" src={image} waves />
            <MDBCardBody>
              <MDBCardTitle>{title}</MDBCardTitle>
              <MDBCardText>{description}</MDBCardText>
              <MDBBtn href={link}>preview</MDBBtn>
              <MDBBtn href={github} gradient="purple">
                code
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>{" "}
        </Fade>
      </MDBCol>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow style={{ marginTop: "50px" }}>
          <MDBCol>
            <MDBTypography
              tag="h3"
              variant="h3-responsive"
              className="text-center font-weight-bold dark-grey-text pt-5 pb-2"
            >
              {" "}
              Highlighted Projects{" "}
            </MDBTypography>
            <hr className="my-4" />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          {PROJECTS.map((pproject) => {
            return <Project key={pproject.id} project={pproject} />;
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Projects;
