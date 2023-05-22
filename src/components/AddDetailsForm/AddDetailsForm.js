import React, { useState } from 'react'
import './AddDetailsForm.css'

function AddDetailsForm(props) {

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        year: "",
        isbn: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddBook(formData);
        setFormData({
            title: "",
            author: "",
            year: "",
            isbn: ""
        })
    }

  return (
    <div className='screen'>
        <button 
            className='close-btn' 
            onClick={() => props.hideScreen()}>
            Close
        </button>
        <p>
            <strong>Add a Book</strong>
        </p>
        <form 
            className='form' 
            onSubmit={handleSubmit}>
            <label>
                <strong>Title</strong>
                <input type='text' placeholder='Enter your book Title'
                name='title'
                onChange={handleChange}
                value={formData.title}
                />
            </label>

            <label>
                <strong>Author</strong>
                <input type='text' placeholder='Enter your book Author'
                name='author'
                onChange={handleChange}
                value={formData.author}
                />
            </label>

            <label>
                <strong>Year</strong>
                <input type='number' placeholder='Enter your book published year'
                name='year'
                onChange={handleChange}
                value={formData.year}
                />
            </label>

            <label>
                <strong>ISBN</strong>
                <input type='number' placeholder='Enter your book ISBN'
                name='isbn'
                onChange={handleChange}
                value={formData.isbn}
                />
            </label>

            <button>Add to the list</button>
        </form>
    </div>
  )
}

export default AddDetailsForm