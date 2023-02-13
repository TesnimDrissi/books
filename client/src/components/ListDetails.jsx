import React, {useState} from 'react';

const ListDetails = (props) => {
  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const [description,setDescription]=useState("")
  const [image,setImage]=useState("")
  
  return(
    
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
  
   
  <input
          type="text"
          name="name"
          placeholder= "Name"
          onChange={(e)=>(setName(e.target.value))}
        />

<input
          type="text"
          name="category"
          placeholder= "Category"
          onChange={(e)=>(setCategory(e.target.value))}
        />

<input
        type="text"
        name="price"
        placeholder= "Price"
        onChange={(e)=>(setPrice(e.target.value))}
      />

<input
      type="text"
      name="description"
      placeholder= "Description"
      onChange={(e)=>(setDescription(e.target.value))}
    />


 <input
      //type="file"
      type= "text"
      name="image"
      placeholder= "Image"
      onChange={(e)=>(setImage(e.target.value))}
    />    
    
  

<button class="edit" id="edit" onClick={()=>(props.updateBook(name,category,price,description,image,props.books.idbook))} > Edit  </button>
<button class="delete" id="delete" onClick={()=>(props.deleteBook(props.books.idbook))} > Delete  </button>

</div>

 
)}

export default ListDetails;