import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.list.find(b => b.id === parseInt(id)));

  if (!book) {
    return (
      <div className='p-5'>
        ⚠️ Book Not Found ⚠️
        <p>The book with ID **{id}** does not exist.</p>
        <button onClick={() => navigate('/books/All')}>Go to Browse Books</button>
      </div>
    );
  }

  return (
    <div className='flex flex-col border-2 rounded-3xl m-10 bg-green-100'>
      <h1 className='flex justify-center font-extrabold text-4xl p-10'>{book.id}. {book.title}</h1>
      <h2 className='flex justify-center font-bold mb-2'>Author: {book.author}</h2>
      <p className='flex justify-center font-medium mb-2'>Category: {book.category}</p>
      <h3 className='flex justify-center text-center font-light mb-5'>Description: {book.details}</h3>

      {/* Back to Browse Button */}
      <div className='flex justify-around mb-5'>
        <button onClick={() => navigate(-1)} className='border-2 border-green-900 p-2 rounded-md max-h-10 mt-30 bg-white hover:text-white hover:bg-green-900'>Back to Previous Page</button>
        <div className='flex justify-end w-40 h-40 bg-amber-200 border-2 rounded-full border-amber-600'>
          <h1 className='flex justify-center align-middle mt-10 text-center text-5xl'> {book.rating} / 5 🎖️</h1>
        </div>
        <Link to="/books/All" className='border-2 border-green-900 rounded-md p-2 max-h-10 mt-30 bg-white  hover:text-white hover:bg-green-900'>Back to Browse Books</Link>
      </div>
    </div>
  );
}

export default BookDetailsPage;