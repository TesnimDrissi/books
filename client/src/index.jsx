import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import BookList from './components/BookList.jsx'
import Adventure from './components/Adventure.jsx'
import Fantasy from './components/Fantasy.jsx'
import Mystery from './components/Mystery.jsx'
//import { image } from '../../server/cloudinary/config.js'


const App = () => {
  const [books, setBooks] = useState([])
  const [update,setUpdate] = useState(false)
  const [view, setView] = useState('BookList')

 



  useEffect(() => {
    axios
    .get("http://localhost:3000/api/books/getAll")
    .then((response)=>{
      setBooks(response.data)
    .catch((error)=>{
      console.error(error);
    })
    })
  }, [update])



// const uploadImage = async function(){
//   const form =  new FormData
//   form.append('image',image)
//   form.append('upload_preset',tasneem)

//   await axios.post("https://api.cloudinary.com/v1_1/dmuills8f/image/upload", form)
//   // .then((response)=>(
//   //   setUpdate(!update)
//   // ))
//   // .catch((err) => {
//   //   console.error(err);
//   // })
            
// }

  const create = function (name,category,price,description,image){
   
    axios.post("http://localhost:3000/api/books/create", 
      {name:name, 
      category:category,
      price,
      description:description,
      image:image})
    .then((response)=>(
      //setItems( response.data)
      setUpdate(!update)
      
    ))
    
    .catch((err) => {
      console.error(err);
    })
  }

  const updateBook = function (name,category,price,description,image,idbook){
   
    axios.put(`http://localhost:3000/api/books/${idbook}`, 
      {name:name, 
      category:category,
      price: price,
      description:description,
      image:image,
      idbook:idbook
      })
    .then((response)=>(
      //setItems( response.data)
      setUpdate(!update)
    ))
    .catch((err) => {
      console.error(err);
    })
  }

  const deleteBook = function (id){
   
    axios.delete(`http://localhost:3000/api/books/${id}`
    )
    .then((response)=>(
      setUpdate(!update)
    ))
    .catch((err) => {
      console.error(err);
    })
  }

  

  return (
    <section class= "list" id= "list">
    <div class= "list-list" id= "list-list">
      <h1>Welcome To The Story Shop</h1> 
      
      <nav className='navbar'>
      <a herf="#" class="logo"><img src="images/logo.png" alt=""/></a>
        <div  className='navbar-item' onClick={()=> setView('Booklist')}>
          HOME
        </div>
        <div className='navbar-item' onClick={()=>setView("Adventure")}>
            ADVENTURE
        </div>
        <div className='navbar-item' onClick={()=>setView("Mystery")}>
            MYSTERY
        </div>
        <div className='navbar-item' onClick={()=>setView("Fantasy")}>
            FANTASY
        </div>
         
      </nav>
        {view === 'BookList' && <BookList books={books} create={create} updateBook ={updateBook} deleteBook ={deleteBook} /*uploadImage={uploadImage} */  />}
        {view === 'Adventure' && <Adventure books= {books} />}
        {view === 'Mystery' && <Mystery books= {books} />}
        {view === 'Fantasy' && <Fantasy books= {books}/>}


    </div>
    </section>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
