import React from 'react'
import FantasyDetails from './FantasyDetails.jsx'

function Fantasy(props) {
  return (
    <section>
    <div class = "book" id ="book">
    

    {props.books.map((books, index) => (
      <div key={index}>
        <FantasyDetails books={books}     />
      </div>
    ))}
    
  </div>
  </section>
  )
}

export default Fantasy
