import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav id='header' className='flex flex-wrap justify-between p-10  bg-green-700 text-white'>
    <Link className='text-3xl text-white font-extrabold' to="/">
      📖 MY BOOK LIBRARY
    </Link>
    <div className='flex justify-end text-xl'>
      <Link to="/" className='text-white mr-4'>Home</Link>
      <Link to="/books/All" className='text-white mr-4'>Browse Books</Link>
      <Link to="/add" className='text-white mr-4'>Add Book</Link>
    </div>
  </nav>
);

export default Header;