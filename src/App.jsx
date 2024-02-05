import { useEffect, useState } from 'react'
import './App.css'
import SS1 from './components/SS1/SS1'
import JsAnswers from './JsAnswers'
import SS2 from './components/SS2/SS2'
import w3Data from "../pagespeed-main/w3.json"
import { W3Context } from './W3Context'
function App() {

  return (
    <W3Context.Provider value={w3Data}>
      <main className='app'>
        {/* <JsAnswers /> */}
        <SS1 />
        <SS2 />
      </main>
    </W3Context.Provider>
  )
}

export default App
