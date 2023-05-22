import React from 'react'
import plusIcon from '../../assets/plus-icon.png'
import './AddBook.css'

function AddBook(props) {
  return (
    <div className='add-book'>
        <img src={plusIcon} alt='add' onClick={props.showScreen} />
    </div>
  )
}

export default AddBook