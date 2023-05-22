import React, { useEffect, useState } from 'react'
import './EditDetailsForm.css'

function EditDetailsForm(props) {

    const [formData, setFormData] = useState({
        title: props.initialBookData.title,
        author: props.initialBookData.author,
        year: props.initialBookData.year,
        isbn: props.initialBookData.isbn
    });

    // useEffect(() => {
    //     setFormData(props.initialBookData);
    // }, [props.initialBookData])

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
        // props.onUpdateBook(formData);
        setFormData({
            title: "",
            author: "",
            year: "",
            isbn: ""
        });
    }

  return (
    <div className='screen'>
        <button 
            className='close-btn' 
            onClick={() => props.hideScreen()}>
            Close
        </button>
        <p>
            <strong>Edit this Book</strong>
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

            <button>Save</button>
        </form>
    </div>
  )
}

export default EditDetailsForm