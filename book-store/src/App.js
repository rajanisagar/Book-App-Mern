import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';
import About from './components/About';
import BookDetails from './components/Book/BookDetails';


function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/add' element={<AddBook />} exact></Route>
          <Route path='/books' element={<Books />} exact></Route>
          <Route path='/about' element={<About />} exact></Route>
          <Route path='/books/:id' element={<BookDetails />} exact></Route>
        </Routes>
      </main>
      

    </div>
  );
}

export default App;
