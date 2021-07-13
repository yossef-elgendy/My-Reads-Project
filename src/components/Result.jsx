import React from 'react'
import PropTypes from 'prop-types'

const Result = props => {
    const {book, handleUpdate} = props
    
    // handeling errors from the returned books of the api
    if( typeof(book.imageLinks) != "undefined" && typeof(book.authors) != "undefined" ){ 

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={typeof book.shelf !== "string" ? "none": book.shelf} onChange={(event)=>handleUpdate(book,event.target.value)}>
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

Result.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdate:PropTypes.func.isRequired,
}

export default Result

