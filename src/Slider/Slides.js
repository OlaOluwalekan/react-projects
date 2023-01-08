import React, { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa"
import people from "./data"

const Slides = () => {
  const [number, setNumber] = useState(0)
  console.log(number)

  useEffect(() => {
    if (number === 2) {
      slideClass = "third-slide"
    }
  }, [number])

  const nextSlide = () => {
    setNumber((item) => {
      return item + 1
    })
    console.log(number)
  }
  let slideClass = "next-slide"

  return (
    <div className='container'>
      <span className='icon prev-icon' onClick={() => setNumber(number - 1)}>
        <FaChevronLeft />
      </span>
      <section className='slide-container'>
        <article className={`slides ${number === 1 && slideClass}`}>
          {people.map((person, i) => {
            return (
              <section className={`person-slide`} key={person.id}>
                <img
                  src={person.image}
                  alt={person.name}
                  className='person-image'
                />
                <h2 className='person-name'>{person.name.toUpperCase()}</h2>
                <p className='position'>{person.title}</p>
                <p className='description'>{person.quote}</p>
                <FaQuoteLeft className='quote-icon' />
              </section>
            )
          })}
        </article>
      </section>
      <span className='icon next-icon' onClick={() => setNumber(number + 1)}>
        <FaChevronRight />
      </span>
    </div>
  )
}

export default Slides
