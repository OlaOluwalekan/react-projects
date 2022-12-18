import React, { useState } from "react"

const Questions = ({ id, title, info }) => {
  const [questionIsOpen, setQuiestionIsOpen] = useState(false)
  const [iconClass, setIconClass] = useState("fas fa-plus")

  const openQuestion = () => {
    setQuiestionIsOpen(!questionIsOpen)
    if (questionIsOpen) {
      setIconClass("fas fa-plus")
    } else {
      setIconClass("fas fa-minus")
    }
  }

  return (
    <div className='card'>
      <section className='question'>
        <h3 className='title'>{title}</h3>
        <div className='icon' onClick={openQuestion}>
          <i className={iconClass}></i>
        </div>
      </section>
      {questionIsOpen && <section className='info'>{info}</section>}
    </div>
  )
}

export default Questions
