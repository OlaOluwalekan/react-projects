import "./App.css"
import Headers from "./Tabs/Headers"
import Content from "./Tabs/Content"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [showTommy, setShowTommy] = useState(true)
  const [showBigdrop, setShowBigdrop] = useState(false)
  const [showCuker, setShowCuker] = useState(false)

  const getTab = (company) => {
    if (company === "tommy") {
      setShowTommy(true)
      setShowBigdrop(false)
      setShowCuker(false)
    } else if (company === "bigdrop") {
      setShowTommy(false)
      setShowBigdrop(true)
      setShowCuker(false)
    } else {
      setShowTommy(false)
      setShowBigdrop(false)
      setShowCuker(true)
    }
  }

  const fetchData = async () => {
    setIsLoading(true)
    const response = await (
      await fetch("https://course-api.com/react-tabs-project")
    ).json()
    setData(response)
    // console.log(response[0])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(data)

  if (isLoading) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='app'>
      <h1 className='head'>Experience</h1>
      <main className='content-container'>
        <Headers getTab={getTab} />
        {showTommy && <Content {...data[0]} />}
        {showBigdrop && <Content {...data[1]} />}
        {showCuker && <Content {...data[2]} />}
      </main>
      <button className='btn'>more info</button>
    </div>
  )
}

export default App
