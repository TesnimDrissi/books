import React from 'react'
import MysteryDetails from './MysteryDetails.jsx'

function Mystery(props) {

  
  return (
    <section>
    <div class = "book" id ="book">
    

    {props.books.map((books, index) => (
      <div key={index}>
        <MysteryDetails books={books}  updateBook ={props.updateBook} deleteBook ={props.deleteBook}   />
      </div>
    ))}
    
  </div>
  </section>
  )
}

export default Mystery
