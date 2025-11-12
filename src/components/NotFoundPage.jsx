import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NotFoundPage() {
  const location = useLocation();

  return (
    <div className='p-10 text-center flex-col justify-center align-middle'>
      <h1>404 - Page Not Found</h1>
      <p>The URL you requested could not be found:</p>
      <h1 className='bg-gray-200 p-2 rounded-2xl'>
        {location.pathname}
      </h1>
      <p className='border-2 border-black rounded-2xl p-2 m-5'>
        <Link to="/" className='font-bold'>
          Go back to the Home Page
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;