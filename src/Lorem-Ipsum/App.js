import React, { useState } from "react"
import "./App.css"
import text from "./Lorem-Ipsum/data"

const App = () => {
  const [result, setResult] = useState([])
  const [paragraph, setParagraph] = useState(0)

  const getLorem = () => {
    // console.log(paragraph)
    let amount = parseInt(paragraph)

    console.log(text.length)
    setResult([...text].splice(0, amount))
  }

  return (
    <div className='App'>
      <h1 className='heading'>tired of boring lorem ipsum?</h1>
      <article className='input-container'>
        <span>Paragraphs:</span>
        <input
          type='number'
          name='number'
          id='number'
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <button onClick={getLorem}>generate</button>
      </article>
      <section className='result'>
        {result.map((res, i) => {
          return (
            <p className='para' key={i}>
              {res}
            </p>
          )
        })}
      </section>
    </div>
  )
}

export default App
