import React, { useState, useEffect, useRef } from "react"
import "./App.css"
import List from "./Grocery-Bud/List"
import Alert from "./Grocery-Bud/Alert"

const getLocalStorage = () => {
  let items = localStorage.getItem("groceries")
  if (items) {
    return JSON.parse(localStorage.getItem("groceries"))
  } else {
    return []
  }
}

const App = () => {
  const [text, setText] = useState("")
  const [list, setList] = useState(getLocalStorage())
  const [editMode, setEditMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    type: "success",
    msg: "",
  })
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      if (editMode) {
        updateItem(currentIndex)
        setEditMode(false)
      } else {
        addToList()
        setAlert({
          show: true,
          type: "success",
          msg: "item added successfuly",
        })
      }
      setText("")
    } else {
      setAlert({
        show: true,
        type: "fail",
        msg: "this feild is required",
      })
    }
  }

  const editItem = (id) => {
    setEditMode(true)
    let newList = list.find((t) => {
      return t.id === id
    })
    setText(newList.text)
    setCurrentIndex(id)
  }

  const updateItem = () => {
    let newList = list.filter((item) => {
      if (item.id === currentIndex) {
        item.text = text
      }
      return item
    })
    setList(newList)
    setAlert({
      show: true,
      type: "success",
      msg: "item updated successfully",
    })
  }

  const deleteItem = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id
    })
    setList(newList)
    setAlert({
      show: true,
      type: "fail",
      msg: "item deleted!",
    })
  }

  const addToList = () => {
    let newList = {
      id: new Date().getTime().toString(),
      text,
    }
    setList([...list, newList])
  }

  const clearItems = () => {
    setList([])
    setAlert({
      show: true,
      type: "fail",
      msg: "all items have been removed",
    })
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [editMode])

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(list))
  }, [list])

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert({
        show: false,
        type: "success",
        msg: "hello",
      })
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <div className='App'>
      <section className='container'>
        <form className='form' onSubmit={handleSubmit}>
          {alert.show && <Alert alertClass={alert.type} message={alert.msg} />}
          <h1 className='site-name'>Grocery Bud</h1>
          <article>
            <input
              type='text'
              name='text'
              id='text'
              placeholder='e.g. egg'
              value={text}
              onChange={(e) => setText(e.target.value)}
              ref={inputRef}
            />
            <button type='submit'>{editMode ? "Update" : "Add"}</button>
          </article>
        </form>
        <section className='list-container'>
          {list.map((li, i) => {
            return (
              <List
                key={li.id}
                {...li}
                editItem={() => editItem(li.id)}
                deleteItem={() => deleteItem(li.id)}
              />
            )
          })}
        </section>
        {list.length !== 0 && (
          <button className='clear-list' onClick={clearItems}>
            Clear Items
          </button>
        )}
      </section>
    </div>
  )
}

export default App
