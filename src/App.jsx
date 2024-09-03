import { useState } from 'react'
import './App.css'

function App() {

  const [arr, setArr] = useState(["Daniyal", "Imran", "Zahid"]);
  const [newName, setNewName] = useState("");

  const handleClick = () => {
    setArr([...arr, newName]);
    setNewName("");
  }

  return (
    <>
       <div>
        <ol>
          {arr.map(val => ( <li key={val}>{val}</li>))}
        </ol>
       </div>
        <input type="text" value={newName} onChange={(e) => {setNewName(e.target.value)}} />
        <button onClick={handleClick}>Add someone to array.</button>
    </>
  )
}

export default App
