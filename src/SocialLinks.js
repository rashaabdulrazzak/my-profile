import React,{Component} from 'react'
import SOCIALPROFILE from './data/socialProfile'
class SocialItem extends Component{
  render(){
    const {image, link } = this.props.item;
    return(
      <div style={{ display:'inline-block'}}>
       <a href={link}> <img src={image} alt= 'link' style={{ width: 100, height:100,margin:10}}/></a>
      </div>
    )
  }
}
class SocialLinks extends Component{
 render(){
   return(
     <div>
       <h2> Social Links  </h2>
       {
         SOCIALPROFILE.map( item =>{
           return (
             <SocialItem key={item.id} item={item}/>
           )
         })
       }
     </div>
   )
 }
}
export default SocialLinks
