import { useState } from 'react'
import './App.css'

function App() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  return (
    <>
      <input type="text" onChange={(e) => {setNum1(+(e.target.value))}} />
      <input type="text" onChange={(e) => {setNum2(+(e.target.value))}} />
      <button onClick={() => {setResult(num1 + num2)}}>+</button>      
      <button onClick={() => {setResult(num1 - num2)}}>-</button>      
      <button onClick={() => {setResult(num1 * num2)}}>*</button>      
      <button onClick={() => {setResult(num1 / num2)}}>/</button> 
      <h1>Резудьтат</h1>
      <h2>{result}</h2>     
    </>
  )
}

export default App
