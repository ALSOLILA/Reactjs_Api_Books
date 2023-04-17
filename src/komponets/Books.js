import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
import Popup from './Popup';

function Books() {

    const [books,setBooks]=useState ([])
    const [page,setPage]=useState(1)
    const [book,setBook]=useState()

    useEffect(()=>{
        axios.get(`https://gutendex.com/books/?page=${page}`)
        .then(response => setBooks(response.data.results)
        .catch(e=> console.log(e)))

    },[page])

    const getBook = (id)=> {
    const fbooks  = books.filter(book => book.id ===id)

    if(fbooks.length>0) setBook(fbooks[0])
    }

    const closePopup =(state) => {
      if (state === true) setBook(undefined)
    }


 
  return (
  <>
  
  <div className="pagination">
        <button onClick={()=>{
            if (page >1) setPage(page=>page-=1)
        }}>Prev</button>
        <span>{page}</span>
        <button onClick={()=>{
            setPage(page=> page+=1)
        }}>Next</button>
      </div>
    <div className="books">
    {books && books.map(book=> <Book key={book.id} data={book} getBook={getBook} /> )}
    </div>
    {book && <Popup book={book} closePopup={closePopup} />}
    </>
  )
}

export default Books