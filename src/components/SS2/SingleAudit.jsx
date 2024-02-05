import React, { useState } from 'react'
import { HiMiniChevronDown } from "react-icons/hi2";
import "./styles/singleaudit.css"
// import { parseText } from '../SS1/BottomStats';
import {getColor, getIcon , parseText} from "../../utils/utils"


const SingleAudit = ({ item }) => {

    const [expand, setExpand] = useState(false)

    return (
        <div className="audit-item" >
            <div className="audit-item__left">
                {getIcon(item.score)}
                <span className="audit-item__left__title">{item.title}</span>
                <span className="audit-item__left__score" style={{color: `${getColor(item.score)}`}}> - {item.displayValue}</span>
            </div>
            <div className="audit-item__right">
                <button onClick={() => setExpand(!expand)}> <HiMiniChevronDown /> </button>
            </div>
            {
                expand && (
                    <div className='audit-item__description'>
                        <p className='description' dangerouslySetInnerHTML={parseText(item.description)}></p>
                    </div>
                )
            }
        </div>
    )
}

export default SingleAudit