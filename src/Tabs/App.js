import "./App.css"
import Headers from "./Tabs/Headers"
import Content from "./Tabs/Content"
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState(0)

  const getTab = (i) => {
    setValue(i)
  }

  const fetchData = async () => {
    setIsLoading(true)
    const response = await (
      await fetch("https://course-api.com/react-tabs-project")
    ).json()
    setData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className='app'>
      <h1 className='head'>Experience</h1>
      <main className='content-container'>
        <Headers tabs={data} getTab={getTab} value={value} />
        <Content {...data[value]} />
      </main>
      <button className='btn'>more info</button>
    </div>
  )
}

export default App
