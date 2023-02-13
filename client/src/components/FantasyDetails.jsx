import React from 'react'

function FantasyDetails(props) {
  return (
    <div class = "description" id= "description">
    <h2>{props.books.name} : </h2> 
    <h5>Price : {props.books.price}</h5>
    <h3>Category : {props.books.category}</h3>
   
   <div>
     <h4>Details :</h4>
     {props.books.description}
   </div>
 
 
   <div class = "container">
   <img id="bookImg" src={props.books.image} alt=""/>
   </div>
   
    
   
 </div>
  )
}

export default FantasyDetails
