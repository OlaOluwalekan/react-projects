import React from "react"

const Title = ({ toggleNav }) => {
  return (
    <div className='title'>
      <h1 className='site-name'>
        Coding <span>Addict</span>
      </h1>
      <span className='menu-icon' onClick={toggleNav}>
        <i className='fas fa-bars'></i>
      </span>
    </div>
  )
}

export default Title
