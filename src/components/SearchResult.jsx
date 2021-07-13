import React from 'react'
import Result from './Result';
import PropTypes from 'prop-types'

const SearchResult = props => {
    
    const {searchBooks, onUpdate} = props
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    (searchBooks.length > 0 &&
                        searchBooks.map(book => <Result key={book.id} book={book} handleUpdate={onUpdate}/>))
                }
            </ol>
        </div>
    )
    
}

SearchResult.propTypes = {
    searchBooks: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
}

export default  SearchResult;