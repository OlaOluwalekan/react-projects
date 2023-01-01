import React from "react"

const Meal = ({ img, title, price, desc }) => {
  return (
    <div className='meal'>
      <section className='image-container'>
        <img src={img} alt={title} className='meal-image' />
      </section>
      <div className='title-price-desc'>
        <article className='title-price'>
          <h4 className='title'>{title}</h4>
          <p className='price'>$ {price}</p>
        </article>
        <p className='desc'>{desc}</p>
      </div>
    </div>
  )
}

export default Meal
