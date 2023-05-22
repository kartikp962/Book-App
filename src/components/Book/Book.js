import React, { useState } from 'react';
import bookImage from '../../assets/book-img.png';
import deleteIcon from '../../assets/delete-icon.png';
import './Book.css';

function Book(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: props.title,
    author: props.author,
    year: props.year,
    isbn: props.isbn
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSave = () => {
    props.onUpdateBook(formData);
    setIsEditing(false);
  };

  return (
    <div className='book'>
      <img src={bookImage} alt='book-image' />
      {isEditing ? (
        <div className='book-content'>
          <label>
            <strong>Title: </strong>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            <strong>Author: </strong>
            <input
              type='text'
              name='author'
              value={formData.author}
              onChange={handleChange}
            />
          </label>
          <label>
            <strong>Year: </strong>
            <input
              type='number'
              name='year'
              value={formData.year}
              onChange={handleChange}
            />
          </label>
          <label>
            <strong>ISBN: </strong>
            <input
              type='number'
              name='isbn'
              value={formData.isbn}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className='book-content'>
          <p><strong>Title:</strong> {props.title}</p>
          <p><strong>Author: </strong>{props.author}</p>
          <p><strong>Year:</strong> {props.year}</p>
          <p><strong>ISBN:</strong> {props.isbn}</p>
          <div className='book-footer'>
            <button onClick={handleEditToggle}>Edit</button>
            <img
              src={deleteIcon}
              alt='delete-icon'
              onClick={props.deleteBook}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
