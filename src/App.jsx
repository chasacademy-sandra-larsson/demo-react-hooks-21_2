import { useState, useEffect } from 'react'
import './App.css'

function App() {



  return (
    <div className="App">
        {/* <Counter/> */}
        {/* <ShowDialog/> */}
        <List/>
    </div>
  )
}

function List() {

  const initialList = [
    {id: 1, task: "gym", isComplete: false},
    {id: 2, task: "run", isComplete: true},
    {id: 3, task: "eat", isComplete: false},
  ]
  
  const [todos, setTodo] = useState(initialList)

  useEffect(() => {

    console.log("detta körs vid varje rendering!!")

  })
  
  
  const handleIsComplete = (id) => {
      const newTodos = todos.map( item => {
        if(item.id === id) {
          return {...item , isComplete: item.isComplete ? false : true}
        }
        return item;

      })
    setTodo(newTodos)
  }

  const handleAdd = () => {
    const todo =  {id: 4, task: "work", isComplete: false}


    // istället för push()
    const newList = [...todos, todo]
    setTodo(newList)
  }

  
  return (
    <div>
      <ul>
      {todos.map((item) => {
        return <span key={item.id}
            style={{textDecoration: item.isComplete ? 'line-through' : 'none'}}
        >
        <li onClick={() => handleIsComplete(item.id)}
      >{item.task}</li>
        </span>
      })}
      </ul>
      <button onClick={handleAdd}>Add</button>
    </div>

  )
}

function ShowDialog() {

  const [visible, setVisible] = useState(false)


  const handleToggle = () => {
      setVisible((prevBool => !prevBool))
  }

  return(
    <div>
      <button onClick={handleToggle}>Show dialog</button>
      {/* Conditional rendering */}
      {visible && <p>If visible is true this text is shown</p>}

    </div>

  ) 
}

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => (prevCount + 1))
    }
    const decrement = () => {
      setCount(prevCount => (prevCount - 1))
  }

  return (
    <div >
    <button onClick={increment}>Increment</button>
    <p>{count}</p>
    <button onClick={decrement}>Decrement</button>

  </div>
  )
}

export default App
