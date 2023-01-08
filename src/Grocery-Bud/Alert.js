import React from "react"

const Alert = ({ alertClass, message }) => {
  return (
    <div className={`alert-box ${alertClass}`}>
      <p className='alert-message'>{message}</p>
    </div>
  )
}

export default Alert
