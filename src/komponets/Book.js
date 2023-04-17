import React from 'react'

function Book({data,getBook}) {
  const handleClick = (e)=>{
    getBook(data.id);
  }
  return (
  
    <div className="book">
      <img src={data.formats['image/jpeg']} alt={data.formats['image/jpeg']} />
      <h3>{data.title}</h3>
      <div>{data.authors.map(author => <p>{author.name}</p> )}</div>
      <div>{data.authors.map(author => <p>{author.birth_year}-{author.death_year}</p> )}</div>
      <button onClick={handleClick}>Read Details</button>
    </div>
  )
}

export default Book