import React from "react"
import data from "./data"

const tabs = ({ filterMeals }) => {
  const categories = ["all", ...new Set(data.map((item) => item.category))]

  return (
    <div className='tabs'>
      {categories.map((category, i) => {
        return (
          <article
            className='tab'
            key={i}
            onClick={() => filterMeals(category)}
          >
            {category}
          </article>
        )
      })}
    </div>
  )
}

export default tabs
