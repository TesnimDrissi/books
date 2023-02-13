import React from 'react'
import AdventureDetails from './AdventureDetails.jsx'

function Adventure(props) {
    


  return (
    <section>
    <div class = "book" id ="book">
    

    {props.books.map((books, index) => (
      <div key={index}>
        <AdventureDetails books={books}     />
      </div>
    ))}
    
  </div>
  </section>
  )
}

export default Adventure
