import "./App.css"
import NavItem from "./Navbar/NavItem"
import Socials from "./Navbar/Socials"

function App() {
  return (
    <div className='app'>
      <header>
        <NavItem />
        <Socials />
      </header>
    </div>
  )
}

export default App
