const express = require('express')
const mongoose = require('mongoose')
const app = express(); 
const router = require('./routes/book-routes')
const cors =  require('cors')

// const bodyParser = require('body-parser');
//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.urlencoded({extended: true}))
// app.use(bodyParser.json());
app.use('/books',router) // localhost:5000/books


 
mongoose.connect("mongodb://localhost:27017/bookstore",{    useUnifiedTopology: true}
).then(()=> console.log('Connected to Database'))
.then(()=>{app.listen(5000)})
.catch((err)=>{console.log(err)})