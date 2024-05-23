import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    userName: 'ashish',
    age: 27,
    isLoggedIn: false,
  }

 let myArr = [1, 2, 3, 4];

 
 

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username='singhashish' someObj = {myObj} otherObj = {myArr} btnText ="Click-me"/>
      <Card username= "ashish" btnText ="Visit-me"/>

    </>
  )
}

export default App
