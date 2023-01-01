import React from "react"

const Header = ({ itemInCart }) => {
  return (
    <header className='header'>
      <h1 className='title'>Use Reducer</h1>
      <article className='bag-icon'>
        <i className='fas fa-bag-shopping'></i>
        <p className='item-in-cart'>{itemInCart}</p>
      </article>
    </header>
  )
}

export default Header
