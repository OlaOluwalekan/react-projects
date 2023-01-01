import React from "react"

const Headers = ({ getTab, active }) => {
  let activeClass = active
  return (
    <div className='headers'>
      <article className='header' onClick={() => getTab("tommy")}>
        tommy
      </article>
      <article className='header' onClick={() => getTab("bigdrop")}>
        bigdrop
      </article>
      <article className='header' onClick={() => getTab("cuker")}>
        cuker
      </article>
    </div>
  )
}

export default Headers
