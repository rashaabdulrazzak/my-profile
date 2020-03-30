import React,{Component} from 'react'
import SOCIALPROFILE from './data/socialProfile'
import MyForm from './MyForm';
import { MDBContainer, MDBRow ,MDBCol,MDBIcon, MDBBtn} from "mdbreact";
import Rotate from 'react-reveal';

class SocialItem extends Component{
  render(){
    const {iconName,social, link } = this.props.item;
    return(
     
        <MDBBtn style={{backgroundColor:'#4285f4 !important'}} size="lg" tag="a" className='btnFloating' floating social={social} href={link} >
        <MDBIcon fab icon={iconName} className='rounded-circle'/>
       </MDBBtn>
     
    )
  }
}
class SocialLinks extends Component{
 render(){
   return(   
     <MDBContainer class=" z-depth-1 my-5 pt-5 pb-3 px-5">
         <MDBRow style={{marginTop:'50px',textAlign:'center'}}> 
          
         <MDBCol>
         <h3 className="text-center font-weight-bold dark-grey-text pt-5 pb-2">Say Hi to Me</h3>  
         <hr className="my-4" />
        
         </MDBCol>
         
         </MDBRow>
        <MDBRow>           
             <MDBCol md='5' className="mb-4 mb-md-0">  
                <Rotate top left>          
                <div className="view">
                  <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" class="img-fluid" alt="smapleimage"/>
                </div>
                </Rotate>   
                </MDBCol>
                <MDBCol md='5' className=" offset-md-2 mb-lg-0 mb-4"> 
                   <Rotate top right>                    
                <MyForm/>                  
               </Rotate>
               </MDBCol>
       </MDBRow>
       <MDBRow center>
         <MDBCol >
             <h4 style={{textAlign:'center'}} className='pt-5'> My Social Links  </h4>
               <MDBRow center>
               <MDBCol size="4">
                    {
                      SOCIALPROFILE.map( item =>{
                        return (
                          <SocialItem key={item.id} item={item}/>
                        )
                      })
                    }
                </MDBCol>
                </MDBRow>
         </MDBCol>
       </MDBRow>
     </MDBContainer>
      )
 }
}
export default SocialLinks
