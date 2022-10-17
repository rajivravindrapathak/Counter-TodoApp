import { useState } from 'react'
import './App.css'
import Counter from "./Components/Counter"
import { Todo } from './Components/Todo'

function App() {

  return (
    <div className="App">
      <h1>Counter for my app</h1>
      <Counter />
      <h1>Todo app</h1>
      <Todo />
    </div>
  )
}

export default App
