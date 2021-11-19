import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {title, author}});
        setTitle('');
        setAuthor('');
        console.log("Here");
    }
    return ( 
        <form onSubmit={ handleSubmit }>
            <label>Add new book to read</label>
            <input type="text" placeholder="Book title" 
                onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Book author" 
                onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="Add Book" />
        </form>
     );
}
 
export default NewBookForm;