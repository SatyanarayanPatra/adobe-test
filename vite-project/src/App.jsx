import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UserForm} from './Components/UserForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UserForm />
    </div>
  )
}

export default App
