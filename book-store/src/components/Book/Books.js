import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Book from './Book';
import './Books.css'


function Books(props) {
    const fetchhandler = async () => {
       return  await axios.get('http://localhost:5000/books').then((res)=>res.data)
    }

    const [books, setBooks] = useState()
    useEffect(() => {
        fetchhandler().then(data=>setBooks(data))
    },[])
    console.log(books)
    return (
        <div >
          <ul>
            {books && books.map((book,i)=>(
                <li className='book' key={i}>
                    <Book book={book}/>
                </li>
            ))}
          </ul>
        </div>
    );
}

export default Books;