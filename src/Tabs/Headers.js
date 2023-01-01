import React from "react"

const Headers = ({ getTab, tabs, value }) => {
  // let activeClass = active
  return (
    <div className='headers'>
      {tabs.map((tab, i) => {
        return (
          <article
            className={`header ${value === i && "active"}`}
            key={tab.id}
            onClick={() => getTab(i)}
          >
            {tab.company}
          </article>
        )
      })}
    </div>
  )
}

export default Headers
