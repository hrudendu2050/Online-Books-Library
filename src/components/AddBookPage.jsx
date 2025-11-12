import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';
import { bookCategories } from '../data/booksData';

const initialFormState = {
  title: '',
  author: '',
  description: '',
  rating: '',
  category: bookCategories[0] || 'Fiction',
};

function AddBookPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error on change
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required.';
    if (!formData.author) newErrors.author = 'Author is required.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Rating must be a number between 1 and 5.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook = {
      ...formData,
      id: Date.now(), // Simple unique ID
      rating: parseFloat(formData.rating),
    };

    dispatch(addBook(newBook)); // Dispatch to Redux
    navigate('/books/All'); // Redirect to Browse Books
  };

  return (
    <div className='max-w-350 m-10 p-5 flex flex-col justify-center bg-green-100 shadow-md rounded-2xl'>
      <h2 className='font-extrabold text-2xl flex justify-center mb-4'>➕ Add a New Book</h2>
      <form onSubmit={handleSubmit} className='grid grid-rows-5 gap-5 justify-center'>
        
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} className='bg-white rounded-2xl ml-2 w-100 p-2' />
          {errors.title && <p className='text-red-600'>{errors.title}</p>}
        </div>

        <div>
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} className='bg-white rounded-2xl ml-2 w-96 p-2' />
          {errors.author && <p className='text-red-600'>{errors.author}</p>}
        </div>

        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className='bg-white rounded-2xl ml-2 w-88 p-2'></textarea>
          {errors.description && <p className='text-red-600'>{errors.description}</p>}
        </div>
        
        <div>
          <label>Rating (1-5):</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" step="0.1" className='bg-white rounded-2xl ml-2 p-2'/>
          {errors.rating && <p className='text-red-600'>{errors.rating}</p>}
        </div>

        <div>
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange} className='bg-white rounded-2xl ml-2 p-2'>
            {bookCategories.filter(cat => cat !== 'All').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <button type="submit" className='flex justify-center p-2 bg-green-600 text-white rounded-2xl'>
          Add Book to Library
        </button>
      </form>
    </div>
  );
}

export default AddBookPage;