import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

const List = ({ text, editItem, deleteItem }) => {
  return (
    <div className='list'>
      <p className='list-text'>{text}</p>
      <article className='action-btns'>
        <span className='edit-icon' onClick={editItem}>
          <FaEdit />
        </span>
        <span className='delete-icon' onClick={deleteItem}>
          <FaTrash />
        </span>
      </article>
    </div>
  )
}

export default List
