import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
  <MDBContainer>
  <MDBRow>
    <MDBCol >
       
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mnqzwgoz"
        method="POST"
      >
      
            
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right"  name="email"  />
          
         
           <MDBInput type="textarea" rows="2" name="message" label="Your message" icon="pencil-alt" />

          {status === "SUCCESS" ? <p>Thanks!</p> :  <button class='btn' outline color="secondary"> Submit<MDBIcon far icon="paper-plane" className="ml-1" /> </button>}
         {status === "ERROR" && <p>Ooops! There was an error.</p>}
         
    
     
      </form>
         </MDBCol>
  </MDBRow>
  </MDBContainer>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}