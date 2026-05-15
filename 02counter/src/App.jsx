// hooks  
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,chaiCounter] = useState(15);
  //let counter = 25;
  
  const addvalue = () => {
    //console.log("Clicked add ",counter )
    if (counter >= 20) {
      console.log("Not valid above 20");
    } else {
      counter = counter + 1;
    }
    chaiCounter(counter)
  }

  const removevalue = () => {
    //console.log("Clicked remove",counter )
    if (counter >= 0) {
      counter = counter - 1;
    } else {
      console.log("Not valid below 0");
    }
    chaiCounter(counter)
  }
  return (
    <>
      <h1> Chai aur React</h1>
      <h2> Counter value: {counter}</h2>

      <button onClick={addvalue}
      > Add Value {counter}</button>
      <br />
      <button onClick={removevalue}> Remove value {counter}</button>
    </>
  )
}

export default App
