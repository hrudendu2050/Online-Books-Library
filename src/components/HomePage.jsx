import React from 'react';
import { Link } from 'react-router-dom';
import { bookCategories } from '../data/booksData';
import { BookList } from '../data/booksData';

function HomePage () {

  return (
    <div>
      <div className='bg-green-900 p-12 m-5 text-white rounded-2xl'>
        <h1 className='text-4xl'>Welcome to My Library!</h1>
        <p className='text-2xl'>Your gateway to thousands of books across various genres.</p>
      </div>

      <div className='flex flex-wrap justify-around mt-10'>
        {bookCategories.map(cat => (
          <Link 
            key={cat} 
            to={`/books/${cat}`} 
            className= 'flex justify-center p-8 border-2 rounded-2xl border-green-900 w-60  hover:text-white hover:bg-green-900'
          >
            {cat.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className='flex flex-wrap p-10 ml-15'>
        {BookList.map(book => (
           <div className='book-card' key={book.id}>
              <h4 className='book-title'>{book.title}</h4>
              <h4 className='book-author'>By {book.author}</h4>
             <div className='flex-row justify-center'>
              <h4 className='w-15 ml-23 text-center bg-amber-200 border-2 rounded-full border-amber-600 '> {book.rating} / 5</h4>
              <Link  to={`/book/${book.id}`}><h4 className='w-30 mt-3 ml-16 text-center border-2 rounded-2xl border-green-900  hover:text-white hover:bg-green-900'>View Details</h4></Link>
             </div>
          </div>
      ))}
      </div>
    </div>
  );
};

export default HomePage;