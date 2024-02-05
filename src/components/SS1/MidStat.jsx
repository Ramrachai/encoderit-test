import React, { useContext } from 'react'
import "./styles/midstats.css"
import CircularProgressBar from '../circularProgess/CircularProgress'
import { IoTriangle, IoSquare } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { W3Context } from '../../W3Context'


const MidStat = () => {
    const w3Context = useContext(W3Context)
    let performanceScore = w3Context.categories.performance.score * 100
    const imgSrc = w3Context.audits['final-screenshot'].details.data

    return (
        <div className='mid-stat__container'>
            <div className='mid-stat__left'>
                <CircularProgressBar percentage={performanceScore} />
                <h2>Performance</h2>
                <p>
                    Values are estimated and may vary. The <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=lr"> performance score is calculated </a> directly from these metrics. <a href="https://googlechrome.github.io/lighthouse/scorecalc/#FCP=767&LCP=1470&TBT=34&CLS=0.01&SI=1155&TTI=1866&FMP=844&device=desktop&version=11.4.0">See calculator. </a>
                </p>

                <div className="ranges">
                    <div className="range_item">
                        <IoTriangle color='#ff3333' />
                        <span>0-49</span>
                    </div>
                    <div className="range_item">
                        <IoSquare color='#ffaa33' />
                        <span>50-89</span>
                    </div>
                    <div className="range_item">
                        <FaCircle color='#00cc66' />
                        <span>90-100</span>
                    </div>

                </div>
            </div>
            <div className="line"></div>
            <div className='mid-stat__right'>
                <img src={imgSrc} alt="" />
            </div>

        </div>
    )
}

export default MidStat