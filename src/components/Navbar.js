import React, {useContext, useEffect} from 'react';
import { BookContext } from '../contexts/BookContext';


const Navbar = () => {
    const {books, author, id} = useContext(BookContext);
    useEffect(() => {
        console.log('SOmething broke');
    })
    return ( 
        <div className="navbar">
            <h1>TAGABAZA READING LIST</h1>
            <p>Currently you have {books.length} left to read</p>
        </div>
     );
}
 
export default Navbar;
