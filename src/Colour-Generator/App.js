import React, { useState } from "react"
import "./App.css"
import Values from "values.js"
import SingleColor from "./Colour-Generator/SingleColor"

const App = () => {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values("#769078").all(10))

  const getColours = (e) => {
    e.preventDefault()
    try {
      let colours = new Values(color).all(10)
      setList(colours)
      console.log(colours[0].hex)
      setError(false)
    } catch (error) {
      setError(true)
      console.log("there is an error")
    }
  }

  return (
    <div className='App'>
      <header>
        <h1 className='site-name'>Colour Generator</h1>
        <form className='form' onSubmit={getColours}>
          <input
            type='text'
            name='colourCode'
            id='colourCode'
            placeholder='#f234ad'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? "error" : undefined}
          />
          <button type='submit'>Sunmit</button>
        </form>
      </header>

      <section className='list-container'>
        {list.map((item, index) => {
          return (
            <SingleColor key={index} {...item} hex={item.hex} index={index} />
          )
        })}
      </section>
    </div>
  )
}

export default App
