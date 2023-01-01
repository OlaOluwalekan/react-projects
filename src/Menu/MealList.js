import React from "react"
import Meal from "./Meal"

const MealList = ({ meals }) => {
  return (
    <div className='meal-list'>
      {meals.map((meal) => {
        return <Meal key={meal.id} {...meal} />
      })}
    </div>
  )
}

export default MealList
