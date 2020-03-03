import React,{Component} from 'react'
import  Projects from './Projects'
import SocialLinks  from './SocialLinks'
import image from './assets/profile.png'

class App extends Component{

//  constructor(){
  //  super();
//    this.state={ displayBio : false};
//    this.toggleDisplayBio = this.toggleDisplayBio.bind(this)
//      }
//  toggleDisplayBio(){
//      console.log(`Component this ${this}`)
//      this.setState({displayBio:!this.state.displayBio});}
// we can use a short defination
state={ displayBio : false};
toggleDisplayBio = () =>{
    this.setState({displayBio:!this.state.displayBio});
  }
  render(){

    return(
      <div>
          <img src={image} alt='profile' className="profile"/>
          <h1> Hello </h1>
          <p> I am Rasha a Software engineer </p>
          <p> I am always looking forward to working on new and meaningful project </p>
          { this.state.displayBio ? (<div>
               <p> I live in Istanbul, Turkey </p>
               <p> I like coding and my favorite language is JavaScript. I think React is awesome </p>
               <p> beside coding, I like walking and mediating near the lake </p>
               <button onClick={this.toggleDisplayBio}> show less </button>
            </div>): (<div> <button onClick={this.toggleDisplayBio}> Read More </button> </div>) }
            <hr />
            <Projects />
            <SocialLinks />
      </div>
    )
  }
}
export default App;
