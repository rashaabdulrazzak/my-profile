import React,{Component} from 'react'
import image from './assets/profile.png'
import { MDBContainer} from "mdbreact";
//import BIRDS from 'vanta/dist/vanta.birds.min'
import Typical from 'react-typical'
import StarfieldAnimation from 'react-starfield-animation'


class App extends Component{

 state={ displayBio : false};
toggleDisplayBio = () =>{
    this.setState({displayBio:!this.state.displayBio});
  }
  

  render(){

    return(
     
      <MDBContainer fluid className=' z-depth-1 mt-5 pt-5 pb-3 px-5' style={{background :'#2bbbad '}}>
         
         <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />

          <img src={image} alt='profile' className="profile"  style={{margin:20}}/>
         <h2  className="white-text"> <span>I am Rasha a FrontEnd developer   </span>
          <Typical
        steps={['I know HTML ' ,500 ,'I Know CSS',500 , 'I Know JavaScript ',500,'I Know React',500]}
        loop={Infinity}
        wrapper="p"
      />
       </h2>     
          <p  className="white-text "> 
     with a passion for developing websites that help people and make them comfortable when diving into
websites. With experience in Html5,Css3, JavaScript, and React, I discovered web development through my working in a tech
company as a project manager. I bring strong skills in team-building and project management that help the company to
deliver its projects on time and make sure every person does his role. Also at the same company,I work as a junior
frontend developer which let me get a full view of the difficulties that the team may face and enrich my knowledge in that
field. </p>
          { this.state.displayBio ? (<div>
               <p> I live in Istanbul, Turkey , I like coding and my favorite language is JavaScript. I think React is awesome </p>
               <p> beside coding, I like  Reading,waching TV , walking and Eating ice cream </p>
               <button className='btn' onClick={this.toggleDisplayBio}> show less </button>
            </div>): (<div> <button className='btn' onClick={this.toggleDisplayBio}> Read More </button> </div>) }
            <hr />
          
           
      </MDBContainer>
    )
  }
}
export default App;
