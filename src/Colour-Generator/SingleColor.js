import React, { useState, useEffect } from "react"

const SingleColor = ({ weight, hex, rgb, index }) => {
  const [alert, setAlert] = useState(false)

  const showAlert = () => {
    navigator.clipboard.writeText(hex)
    setAlert(true)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <div
      className={`single-colour ${index > 10 && "colour-light"}`}
      style={{ backgroundColor: `rgb(${rgb.join(",")})` }}
      onClick={showAlert}
    >
      <p className='percentage'>{weight}</p>
      <p className='hex-value'>#{hex}</p>
      <p className={`alert ${alert && "show-alert"}`}>
        Color Copied to Clipboard
      </p>
    </div>
  )
}

export default SingleColor
