import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Book from "./Book"
import "./Books.css"

const URL = "http://localhost:5000/books";

const fetchHandler = async() => {
    return await axios.get(URL).then((res)=> res.data)
}

const Books = () => {

    const [books, setBooks] = useState()

    useEffect(()=>{
        fetchHandler().then((data) => setBooks(data.books));
    },[])

    console.log(books);

  return (
    <div className='main_div'>
            
                {
                    books && books.map((book,i) => {
                        return (
                            <Book key={i} book={book} />
                       )
                    })
                }
            
    </div>
  )
}

export default Books