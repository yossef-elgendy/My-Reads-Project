import React from 'react'
import * as BooksAPI from './BooksAPI.js'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListOfBooks from './components/ListOfBooks.jsx'
import { Link, Route } from 'react-router-dom';
import Search from './components/Search.jsx';


class BooksApp extends React.Component {
  state = {

    books: [],
  }

  
  componentDidMount(){
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  atUpdate = (book,shelf) => {
    let flag = true; // indication whether to add a new book or update an existing one 

    for(const shelfBook of this.state.books){
      if(shelfBook.id === book.id)
        flag = false; 
    }

    if(!flag){

    this.setState(prevState =>({
      books: prevState.books.map(oldBook => oldBook.id !== book.id ? oldBook: {...oldBook, shelf})
    }))

    BooksAPI.update(book,shelf)

    } else {
      this.setState(prevState =>({
        books: [...prevState.books, {...book,shelf}]
      }))
    
      BooksAPI.update(book,shelf)
    }
  
    
  }



  render() {
    
    return (
      <div className="app">
        <Route exact path="/search" render={()=>(
          <Search shelfBooks={this.state.books} onUpdate={this.atUpdate}/>
          )} 
        />

        <Route exact path="/" render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

             <ListOfBooks books={this.state.books} onUpdate={this.atUpdate}/>

            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
          )}
        />
       
      </div>
    )
  }
}

export default BooksApp
