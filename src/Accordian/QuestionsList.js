import React from "react"
import Questions from "./Questions"
import data from "./data"

const QuestionsList = () => {
  return (
    <div className='question-list-container'>
      {data.map((item) => {
        return <Questions key={item.id} {...item} />
      })}
    </div>
  )
}

export default QuestionsList
