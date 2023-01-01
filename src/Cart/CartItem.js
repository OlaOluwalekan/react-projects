import React from "react"

const CartItem = ({
  title,
  price,
  img,
  amount,
  increaseItemCount,
  decreaseItemCount,
  removeItem,
}) => {
  return (
    <div className='cart-item'>
      <section className='image-and-name'>
        <img src={img} alt={title} className='item-image' />
        <article className='name-price-remove'>
          <h4 className='item-name'>{title}</h4>
          <h4 className='item-price'>{price}</h4>
          <button className='remove-item' onClick={removeItem}>
            Remove
          </button>
        </article>
      </section>

      <article className='item-count'>
        <span className='increase-count' onClick={increaseItemCount}>
          <i className='fas fa-chevron-up'></i>
        </span>
        <span className='item-amount'>{amount}</span>
        <span className='decrease-count' onClick={decreaseItemCount}>
          <i className='fas fa-chevron-down'></i>
        </span>
      </article>
    </div>
  )
}

export default CartItem
