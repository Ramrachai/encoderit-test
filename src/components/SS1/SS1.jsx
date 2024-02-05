import React, { useState, useContext, createContext } from 'react'
import "./styles/ss1.css"
import TopStats from './TopStats'
import MidStat from './MidStat'
import BottomStats from './BottomStats'
import w3Data from "../../../pagespeed-main/w3.json"
import { W3Context } from './W3Context'

const SS1 = () => {

  // create a context to store w3Data data 



  return (
    <W3Context.Provider value={w3Data}>
      <div className='ss1-container'>
        <TopStats />
        <MidStat />
        <BottomStats />
      </div>
    </W3Context.Provider>
  )
}

export default SS1