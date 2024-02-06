import React, { useContext, useState } from 'react'
import "./styles/auditcontainer.css"
import { W3Context } from '../../W3Context'

import SingleAudit from './SingleAudit';
const Diagnostics = () => {

    const [passedToggle, setPassedToggle] = useState(false)
    const w3Context = useContext(W3Context)
    const filteredData = w3Context.categories.performance.auditRefs.filter(item => ['FCP', 'LCP', 'TBT', 'CLS'].includes(item.acronym))
    const audits = filteredData.map(item => item.relevantAudits)
    const uniqeAudits = [...new Set(audits.flat())]
    const relevantAudits = uniqeAudits.map(item => { return w3Context.audits[item] })
    const passedAudits = relevantAudits.filter(item => item.score == 1)
    const failedAudits = relevantAudits.filter(item => item.score < 1 && (!item.items || item.items.length < 1))
    const sortedFailedAudits = failedAudits.sort((a, b) => b.score - a.score)

    return (

        <div className='audits-container'>
            <div className='diagnostics-container'>
                <div className="header">
                    <h3>Diagnostics</h3>
                    <div className='btn-group'>
                        <span>Show audits relevant to: </span>
                        <button className="active">All</button>
                        <button>FCP</button>
                        <button>LCP</button>
                        <button>TBT</button>
                        <button>CLS</button>
                    </div>
                </div>

                <div className="failed-audit-list">
                    {sortedFailedAudits.map(item => {
                        return (
                            <SingleAudit item={item} key={item.id} />
                        )
                    })}
                </div>
            </div>
            <div className='passed-audit-container'>
                <div className="header">
                    <h3>PASSED AUDITS ({passedAudits.length})</h3>
                    <div className='btn-group'>
                        <button onClick={ () => setPassedToggle(!passedToggle)}>{!passedToggle ? "Hide" : "Show"}</button>
                    </div>
                </div>

                {
                    !passedToggle && (
                        <div className="failed-audit-list">
                            {passedAudits.map(item => {
                                return (
                                    <SingleAudit item={item} key={item.id} />
                                )
                            })}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Diagnostics