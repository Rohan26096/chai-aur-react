import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let counter = 5;
  let [counter , setCounter] = useState(15); // hooks
  const addvalue = () => {
    if(counter<20){
      setCounter(counter+1)
      //setCounter(prevCounter => prevCounter + 1)
    }
  }
  const removevalue= () => {
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addvalue}>Add Value {counter} </button>
      <br/>
      <button onClick={removevalue}>Remove value {counter} </button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App 
