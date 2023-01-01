import React from "react"
import { BiChevronsRight } from "react-icons/bi"

const Content = ({ id, title, company, dates, duties }) => {
  return (
    <div className='content'>
      <h2 className='title'>{title}</h2>
      <p className='company'>{company}</p>
      <p className='dates'>{dates}</p>
      <section className='duties-list'>
        {duties.map((duty, i) => {
          return (
            <article className='duty' key={i}>
              <span>
                <BiChevronsRight className='bullet' />
              </span>
              <p>{duty}</p>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Content
