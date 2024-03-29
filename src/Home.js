import React, { Component } from "react";
import image from "./assets/profile.png";
import { MDBContainer } from "mdbreact";
import Typical from "react-typical";
import "./stars.scss";

class Home extends Component {
  state = { displayBio: false };
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <MDBContainer
        fluid
        className=" z-depth-1 mt-5 pt-5 pb-3 px-5"
        style={{ background: "#2bbbad " }}
      >
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <img
          src={image}
          alt="profile"
          className="profile"
          style={{ margin: 20 }}
        />
        <h2 className="white-text">
          {" "}
          <span>I am Rasha a fullstack developer</span>
          <Typical
            steps={[
              "I know HTML ",
              500,
              "I Know CSS",
              500,
              "I Know JavaScript ",
              500,
              "I Know React",
              500,
              "I Know Node.js",
              500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h2>
        <p className="white-text ">
          With a passion for developing websites that help people and make them
          comfortable when diving into websites. With experience in Html5,Css3,
          JavaScript, React and Nodejs, I discovered web development through my
          working in a tech company as a project manager. I bring strong skills
          in team-building and project management that help the company to
          deliver its projects on time and make sure every person does his role.
          Also at the same company,I work as a junior frontend developer which
          let me get a full view of the difficulties that the team may face and
          enrich my knowledge in that field.
        </p>
        {this.state.displayBio ? (
          <div>
            <p className="white-text">
              {" "}
              I live in Istanbul, Turkey , I like coding and my favorite
              language is JavaScript. I think React is awesome{" "}
            </p>
            <p className="white-text">
              {" "}
              beside coding, I like Reading,waching TV , walking and Eating ice
              cream{" "}
            </p>
            <button
              className="btn btn-white"
              onClick={this.toggleDisplayBio}
              style={{ zIndex: 1 }}
            >
              {" "}
              show less{" "}
            </button>
          </div>
        ) : (
          <div>
            {" "}
            <button
              className="btn btn-white"
              style={{ zIndex: "1" }}
              onClick={this.toggleDisplayBio}
            >
              {" "}
              Read More{" "}
            </button>{" "}
          </div>
        )}
      </MDBContainer>
    );
  }
}
export default Home;
