import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function BrowseBooksPage() {
  const { category } = useParams();
  const allBooks = useSelector(state => state.books.list);
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Filter by Category
  const categoryFilteredBooks = useMemo(() => {
    if (category === 'All') {
      return allBooks;
    }
    return allBooks.filter(book => book.category === category);
  }, [allBooks, category]);

  // 2. Filter by Search Term
  const finalFilteredBooks = categoryFilteredBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='p-10'>
      <h2 className='text-2xl'>Browse Books</h2>
      
      <h2 className=''>{category} Books</h2>

      {/* Search Functionality */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='border-2 border-green-900 rounded-2xl p-2 mb-5 w-80'
      />

      {/* Display List of Books */}
      <div className='grid grid-cols-3 gap-10' >
        {finalFilteredBooks.length > 0 ? (
          finalFilteredBooks.map(book => (
            <div key={book.id} className='border-2 rounded-2xl border-green-900 p-5'>
              <h3 className='text-2xl'>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p className='mb-2'>Category: {book.category}</p>
              <Link to={`/book/${book.id}`} className='border-2 border-green-900 rounded-4xl p-1 hover:text-white hover:bg-green-900'>View Details</Link>
            </div>
          ))
        ) : (
          <p>No books found in this category or matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooksPage;