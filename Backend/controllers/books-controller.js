const Book = require('../model/Book')

const  getAllBooks = async (req, res, next) =>{
    let books
    try{
        books = await Book.find()
    }catch(err){
        console.log(err)
    }
   
    if(!books){
        return res.send({message:"No book Found"})
    }

        return res.send(books)


}

const getBookById = async(req, res, next) =>{
    let id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.send({message:"book not found"})
    }
    return res.send(book)
} 
const updateBook = async(req, res, next) => {
    const id = req.params.id
    const {name, author, description, price , available, image} = req.body
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save()
    }catch(err){
        console.log(err)
    }

    if(!book){
        return res.send({message:"unable to update"})
    }
        return res.send({book})

}


const addBook = async(req, res, next) => {
    const {name, author, description, price , available, image} = req.body
    let book 
    try{
            book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save()
    }catch(err){
        console.log(err)
    }
    console.log(book)


    if(!book){
        return res.send({message:"unable to add "})
    }

    return res.send(book)


}
const deleteBook = async(req, res, next) => {
    let book;
    let id = req.params.id

    try{
        book = await Book.findByIdAndRemove(id)

    }catch(err){
        console.log(err)

    }

    if(!book){
        return res.send({message:"unable to delete"})
    }
        return res.send(book)

}

exports.getAllBooks = getAllBooks
exports.addBook = addBook
exports.getBookById = getBookById
exports.updateBook = updateBook
exports.deleteBook = deleteBook