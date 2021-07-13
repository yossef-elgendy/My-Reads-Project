import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResult from './SearchResult'
import * as BooksAPI from '../BooksAPI.js'
import PropTypes from 'prop-types'

class Search extends Component {

    state = {
        query:'',
        results:[]
    }

    static propTypes = {
        shelfBooks: PropTypes.array.isRequired,
        onUpdate: PropTypes.func.isRequired,
    }

    is_mounted = false

    onSearch = event => {
        this.setState({query:event.target.value});
        
    }

    componentDidUpdate (){
        this.is_mounted = true;
        
        
        (this.state.query !== '' &&
        BooksAPI.search(this.state.query).then(books =>{
            if(this.is_mounted){
                if(books.length > 0){
                    for(let shelfBook of this.props.shelfBooks){
                        for(let book of books){
                            (book.id === shelfBook.id && (book.shelf = shelfBook.shelf))
                        }

                    }
                }
                this.setState({results:books})
            }
        }))
        
    }

    componentWillUnmount(){
        this.is_mounted = false
    }

    render() {
        return (
        
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={this.onSearch} placeholder="Search by title or author"/>

                    </div>
                </div>

                <SearchResult searchBooks={this.state.results} onUpdate={this.props.onUpdate} />
            </div>
            
        )
    }
}
export default Search;