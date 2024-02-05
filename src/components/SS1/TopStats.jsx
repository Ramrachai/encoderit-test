import React, { useContext } from 'react'
import "./styles/topstats.css"
import CircularProgressBar from "../circularProgess/CircularProgress"
import { W3Context } from '../../W3Context'

const TopStats = () => {

    const w3Context = useContext(W3Context)
    let performanceScore = w3Context.categories.performance.score * 100 
    let accessibilityScore = w3Context.categories.accessibility.score * 100
    let bestPracticesScore = w3Context.categories["best-practices"].score * 100
    let seoScore = w3Context.categories.seo.score * 100

    return (
        <div className="top-stat">
            <div className="stat-item">
                <CircularProgressBar percentage={performanceScore} size={50} />
                <p>Performance</p>
            </div>
            <div className="stat-item">
                <CircularProgressBar percentage={accessibilityScore} size={50} />
                <p>Accessibity</p>
            </div>
            <div className="stat-item">
                <CircularProgressBar percentage={bestPracticesScore} size={50} />
                <p>Best Practices</p>
            </div>
            <div className="stat-item">
                <CircularProgressBar percentage={seoScore} size={50} />
                <p>SEO</p>
            </div>
        </div>
    )
}

export default TopStats