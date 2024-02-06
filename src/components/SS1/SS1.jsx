import React from 'react'
import "./styles/ss1.css"
import TopStats from './TopStats'
import MidStat from './MidStat'
import BottomStats from './BottomStats'


const SS1 = () => {
  return (
    <div className='ss1-container'>
      <TopStats />
      <MidStat />
      <BottomStats />
    </div>
  )
}

export default SS1