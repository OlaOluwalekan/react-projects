import React, { useRef } from "react"
import Title from "./Title"

const NavItem = () => {
  const navItemRef = useRef(null)

  const toggleNav = () => {
    navItemRef.current.classList.toggle("close")
  }

  return (
    <section className='title-and-nav'>
      <Title toggleNav={toggleNav} />
      <div className='nav-items close' ref={navItemRef}>
        <span className='link'>Home</span>
        <span className='link'>About</span>
        <span className='link'>Projects</span>
        <span className='link'>Contact</span>
        <span className='link'>Profile</span>
      </div>
    </section>
  )
}

export default NavItem
