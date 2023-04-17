import React from 'react'

function Popup({book,closePopup}) {

    const handleClose=(e)=> {
        closePopup(true)
    }

  return (

    <div className="popup">
     <button style={{'float':'right'}} onClick={handleClose}>Close</button>
     <img src={book.formats['image/jpeg']} alt={book.formats['image/jpeg']} />
      <h3>{book.title}</h3>
      <div>{book.authors.map(author => <p>{author.name}</p> )}</div>
      <div>{book.authors.map(author => <p>{author.birth_year}-{author.death_year}</p> )}</div>

    </div>
  )
}

export default Popup