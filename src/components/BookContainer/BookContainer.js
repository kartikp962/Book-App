import React, { useState } from 'react'
import Book from '../Book/Book'
import AddBook from '../AddBook/AddBook'
import './BookContainer.css'
import AddDetailsForm from '../AddDetailsForm/AddDetailsForm';


function BookContainer() {
    // to show and hide the add details form screen
    const [addScreen, setAddScreen] = useState(false);

    const showScreen = () => {
        setAddScreen(true);
    }

    function hideScreen() {
        setAddScreen(false);
    }

    // to add the book onto the screen after filling the details
    const [books, setBooks] = useState([]);

    const handleAddBook = (bookData) => {
        setBooks(prevBooks => [...prevBooks, bookData]);
    }

    // to delete the book
    const deleteBook = (index) => {
        const tempBooks = [...books];
        if(index < 0) {
            return;
        }
        tempBooks.splice(index, 1);
        setBooks(tempBooks);
    }

    const handleUpdateBook = (updatedBook, index) => {
        const updatedBooks = [...books];
        updatedBooks[index] = updatedBook;
        setBooks(updatedBooks);
      };
      


    return (
        <div className='book-container'>
            <AddBook
                showScreen={showScreen}
            />
            {addScreen && <AddDetailsForm 
                hideScreen={hideScreen}
                onAddBook={handleAddBook}  
            />}
            {books.map((book, index) => (
                <Book
                    key={index}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                    isbn={book.isbn}
                    deleteBook={() => deleteBook(index)}
                    onUpdateBook={(updatedBook) => handleUpdateBook(updatedBook, index)}
                />
            ))}
        </div>
    )
}

export default BookContainer