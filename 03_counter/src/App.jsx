import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useState(15);
  let [counter, setCounter] = useState(15);


  // let counter = 15;
  const addValue = () =>{
    
    setCounter(counter);
  //  console.log("value added", counter);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);

    if(counter <= 20) {
      setCounter(counter + 1);
    }
  }

  const removeValue = () =>{
    // counter = counter - 1;
      //  setCounter(counter - 1);
    if(counter >= 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>singhashish82103 and React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>
        Add Value</button>
      <br/>
      <br/>
      <button onClick={removeValue}>
        Remove Value</button>
    </>
  )
}

export default App
