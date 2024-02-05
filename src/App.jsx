import { useState } from 'react'
import './App.css'
import JsAnswers from './JsAnswers'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-red-500'>Hello world</h2>
      <JsAnswers />
    </>
  )
}

export default App
