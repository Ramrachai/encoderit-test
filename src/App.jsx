import { useEffect, useState } from 'react'
import './App.css'
import SS1 from './components/SS1/SS1'
import JsAnswers from './JsAnswers'
function App() {

  return (
    <main className='app'>
      <JsAnswers />
      <SS1 />
    </main>
  )
}

export default App
