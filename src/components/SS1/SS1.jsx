import React from 'react'
import CircularProgressBar from '../circularProgess/CircularProgress'
import "./ss1.css"

const SS1 = () => {
  return (
    <div className='ss1-container'>

      <div className="top-stat">
        <div className="stat-item">
          <CircularProgressBar percentage={94} size={50} />
          <p>Performance</p>
        </div>
        <div className="stat-item">
          <CircularProgressBar percentage={72} size={50} />
          <p>Accessibity</p>
        </div>
        <div className="stat-item">
          <CircularProgressBar percentage={100} size={50} />
          <p>Best Practices</p>
        </div>
        <div className="stat-item">
          <CircularProgressBar percentage={73} size={50} />
          <p>SEO</p>
        </div>
      </div>
    </div>
  )
}

export default SS1