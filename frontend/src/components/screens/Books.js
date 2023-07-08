import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../axiosConfig";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books/`);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books/?query=${query}`);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'rgb(80 176 80)', textAlign: 'center' }}>Books</h2>
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search books" style={{ padding: '5px', marginRight: '5px' }} />
        <button onClick={handleSearch} style={{ padding: '5px 10px' }}>Search</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #333', padding: '10px' }}>Title</th>
            <th style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #333', padding: '10px' }}>Author</th>
            <th style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #333', padding: '10px' }}>Description</th>
            <th style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #333', padding: '10px' }}>Price</th>
            <th style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #333', padding: '10px' }}>Rating</th>
            <th style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #333', padding: '10px' }}>Genre</th>
            <th style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', borderBottom: '1px solid #333', padding: '10px' }}>Publication Date</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {books.map((book) => (
            <tr key={book.id}>
              <td style={{ padding: '10px', color: '#333', borderBottom: '1px solid #ccc' }}>{book.title}</td>
              <td style={{ padding: '10px', color: '#555', borderBottom: '1px solid #ccc' }}>{book.author}</td>
              <td style={{ padding: '10px', color: '#777', borderBottom: '1px solid #ccc' }}>{book.description}</td>
              <td style={{ padding: '10px', color: '#333', borderBottom: '1px solid #ccc' }}>{book.price}</td>
              <td style={{ padding: '10px', color: '#555', borderBottom: '1px solid #ccc' }}>{book.rating}</td>
              <td style={{ padding: '10px', color: '#777', borderBottom: '1px solid #ccc' }}>{book.genre}</td>
              <td style={{ padding: '10px', color: '#333', borderBottom: '1px solid #ccc' }}>{book.publication_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
