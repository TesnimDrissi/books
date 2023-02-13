import React ,{useState} from "react";
import ListDetails from "./ListDetails.jsx";

const BookList = (props) => {
  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [price,setPrice]=useState("")
  const [description,setDescription]=useState("")
  const [image,setImage]=useState("")

  return (

   <section>
    <div class = "book" id ="book">
    
    
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
      type="text"
      name="image"
      placeholder= "Image"
      //value={image}
      //onChange={(e)=>(setImage(e.target.files[0]))}
      onChange={(e)=>(setImage(e.target.value))}
    />  

<button class="create" id="create" onClick={()=>(props.create(name,category,price,description,image))}> Create  </button>

<h4> New Releases : </h4>
</div>
<div>
    {props.books.map((books, index) => (
      <div key={index}>
        <ListDetails books={books} updateBook ={props.updateBook} deleteBook ={props.deleteBook}    />
      </div>
    ))}
    
  </div>
  </section>


)};

export default BookList;
