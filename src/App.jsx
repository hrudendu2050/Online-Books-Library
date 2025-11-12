import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BrowseBooksPage from './components/BrowseBooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import AddBookPage from './components/AddBookPage';
import NotFoundPage from './components/NotFoundPage';
import { Outlet } from 'react-router-dom';

function App() {
  // Apply Header to multiple routes
  const HeaderLayout = () => (
    <>
        <Header />
        <Outlet /> 
    </>
);
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Routes that include the Header */}
          <Route element={<HeaderLayout />}>
            <Route path="/" element={<HomePage />} />
            {/* Dynamic Routing for Category Filtering */}
            <Route path="/books/:category" element={<BrowseBooksPage />} />
            {/* Dynamic Route for Book Details */}
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/add" element={<AddBookPage />} />
          </Route>
          {/* 404 Page (No Header) */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;