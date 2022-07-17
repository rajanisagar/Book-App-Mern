const express = require('express')
const router = express.Router()
const Book = require('../model/Book')

router.get('/', async(req,res,next)=>{
    let books
    try{
        books = await Book.find()
    }catch(err){
        console.log(err)
    }

    if(!books){
        return res.sendStatus(404).json({message:"No book Found"})
    }

        return res.sendStatus(200).json({books})


})
module.exports = router

