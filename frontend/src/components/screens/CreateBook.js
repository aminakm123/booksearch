import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from "../../axiosConfig";

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [cover_image, setCoverImage] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      author,
      description,
      cover_image,
      price,
      rating,
      genre,
      publication_date
    };

    try {
      const response = await axios.post(`${BASE_URL}/create-book/`, bookData);
      setSuccessMessage('Book created successfully!');
      setErrorMessage('');
      console.log(response.data);
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Failed to create the book.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'rgb(80 176 80)', textAlign: 'center' }}>Create Book</h2>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div
      style={{
        backgroundColor: '#f2f2f2',
        padding: '20px',
        borderRadius: '5px',
      }}>
        <form onSubmit={handleFormSubmit} style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          justifyItems: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label>Cover Image:</label>
            <textarea
              value={cover_image}
              onChange={(e) => setCoverImage(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label>Price:</label>
            <textarea
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label>Rating:</label>
            <textarea
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label>Genre:</label>
            <textarea
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label>Publication Date:</label>
            <textarea
              value={publication_date}
              onChange={(e) => setPublicationDate(e.target.value)}
              required
            ></textarea>
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <button
              type="submit"
              style={{
                backgroundColor: 'rgb(29 151 79)',
                color: 'rgb(242, 242, 242);',
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
