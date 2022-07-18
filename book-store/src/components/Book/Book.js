import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Books.css'

function Book(props) {
    const navigate =  useNavigate()
    const DeleteHandler = async () =>{
        await axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data).then(()=>navigate('/')).then(()=>navigate('/books'))
    }
    const {_id, name, author, description, price, available, image} = props.book 
    return (
        <div className='card'>
            <img src={image} alt={name}></img>
            <article>By {author}</article>
            <h3>{name}</h3> 
            <p>{description}</p>
            <h2>Rs {price}</h2>
            <Button LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
            <Button onClick={DeleteHandler}>Delete</Button>
        </div>
    );
}

export default Book;