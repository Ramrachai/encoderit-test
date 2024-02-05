import React from 'react'
import "./styles/topstats.css"
import CircularProgressBar from "../circularProgess/CircularProgress"

const TopStats = () => {
    return (
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
    )
}

export default TopStats