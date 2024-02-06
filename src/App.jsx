import './App.css'
import SS1 from './components/SS1/SS1'
import JsAnswers from './JsAnswers'
import SS2 from './components/SS2/SS2'
// import w3Data from "../pagespeed-main/w3.json"
import { W3Context } from './W3Context'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'

const apiUrl = "https://raw.githubusercontent.com/encoderit-anik/pagespeed/main/w3.json"
function App() {


  const [w3Data, setW3Data] = useState(null)

  const fetchData = async () => {
    const res = await fetch(apiUrl)
    const data = await res.json() 
    setW3Data(data);
  }
  
  useEffect(() => {
    const timer = setTimeout(fetchData, 1.2 * 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <W3Context.Provider value={w3Data}>
      <main className='app'>
        <JsAnswers />
        {w3Data ? <SS1 /> : <Loader />}
        {w3Data ? <SS2 /> : <Loader />}
      </main>
    </W3Context.Provider>
  )
}

export default App
