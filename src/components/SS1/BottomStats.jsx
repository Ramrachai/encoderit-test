import React, { useState } from 'react'
import "./styles/bottomstats.css"

import data from "../../../pagespeed-main/ss1data.json"
import {getColor, getIcon , parseText} from "../../utils/utils"


const BottomStats = () => {


    const [expand, setExpand] = useState(false)

    Object.entries(data).map(([key, metric]) => console.log(metric.title))

    return (
        <div className='bottom-stat__container'>
            <div className="title">
                <span>METRICS</span>
                <button onClick={() => setExpand(!expand)}>Expand View</button>
            </div>
            <div className="stats">

                {
                    Object.entries(data).map(([key, metrics]) => (
                        <div className="stat-item" key={key}>
                            {getIcon(metrics.score)}
                            <div className='contents' >
                                <p>{metrics.title} </p>
                                <span className='stat-count' style={{ color: `${getColor(metrics.score)}` }}>{metrics.displayValue} </span>
                                {
                                    expand &&
                                    <p className='description' dangerouslySetInnerHTML={parseText(metrics.description)}></p>
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}





// export function parseText(text) {
//     // Use a regular expression to match the parts
//     const regex = /([^[]*)\[([^\]]*)\]\(([^\)]*)\)/;
//     const matches = text.match(regex);

//     if (!matches) return {};

//     // Return object with separate parts

//     let description = matches[1].trim()
//     let link_text = matches[2]
//     let link_url = matches[3]

//     let result = `${description} <a href="${link_url}"> ${link_text}</a>`
//     return { __html: result };
// }




export default BottomStats