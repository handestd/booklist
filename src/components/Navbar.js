import { BookContext } from "../contexts/BookContext";
import React, { useContext } from 'react';

const Navbar = () => {
    const {books} = useContext(BookContext);

    return ( <div className="navbar">
        <h1>Ninja Reading List</h1>
        <p>Currently you have {books.length} books to get through</p>
    </div> );
}
 
export default Navbar;