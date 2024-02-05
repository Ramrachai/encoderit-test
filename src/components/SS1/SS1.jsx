import React from 'react'
import CircularProgressBar from '../circularProgess/CircularProgress'

const SS1 = () => {
  return (
    <div className='ss1-container'>

      <div className="top-stat">
        <div className="stat-item">
          <CircularProgressBar percentage={94} />
          <p>Performance</p>
        </div>
        <div className="stat-item">
          <CircularProgressBar percentage={72} />
          <p>Accessibity</p>
        </div>
        <div className="stat-item">
          <CircularProgressBar percentage={100} />
          <p>Best Practices</p>
        </div>
        <div className="stat-item">
          <CircularProgressBar percentage={73} />
          <p>SEO</p>
        </div>
      </div>
    </div>
  )
}

export default SS1