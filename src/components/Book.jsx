import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {


    const {book,index,handleUpdate} = props ;
    if(typeof (book.imageLinks) != "undefined" )
    {
        return (
            <li key={index}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(event)=>handleUpdate(book,event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    } else {
        return (<li key={book.id}></li>)
    }
    
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdate:PropTypes.func.isRequired,
}

export default Book;
