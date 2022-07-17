const express = require('express')
const router = express.Router()
const Book = require('../model/Book')
const booKcontroller = require('../controllers/books-controller')

router.get('/', booKcontroller.getAllBooks)
router.get('/:id',booKcontroller.getBookById)
router.post('/',booKcontroller.addBook)
router.put('/:id',booKcontroller.updateBook)
router.delete('/:id', booKcontroller.deleteBook)
module.exports = router


