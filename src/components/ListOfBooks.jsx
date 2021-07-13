import React from 'react'
import Book from './Book';
import PropTypes from 'prop-types';


const ListOfBooks = props => {
   
    const {books,onUpdate} = props;
    const currentlyReading = books.filter(book =>(book.shelf === "currentlyReading"&& book));
    const wantToRead = books.filter(book => (book.shelf === "wantToRead"&& book));
    const read = books.filter(book => (book.shelf === "read"&& book));
    
    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {currentlyReading.map((book,index) => <Book key={index} book={book} handleUpdate={onUpdate}/>)}
                        </ol>
                    </div>
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want To Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {wantToRead.map((book,index) => <Book key={index} book={book} handleUpdate={onUpdate}/>)}
                        </ol>
                    </div>
                </div>

                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {read.map((book,index)  => <Book key={index} book={book} handleUpdate={onUpdate}/>)}
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
    
}

ListOfBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
}

export default ListOfBooks;

