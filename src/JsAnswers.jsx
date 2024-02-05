import React from 'react'
import data from "../pagespeed-main/w3.json"

const JsAnswers = () => {

    // answer: 1 start =====
    const filtered = data.categories.performance.auditRefs.filter(item => {
        return ['FCP', 'LCP', 'TBT', 'CLS'].includes(item.acronym);
    });
    console.log("anwer1 ==",filtered)

    
    // answer: 2 start  ===== 
    const audits = filtered.map( item => item.relevantAudits)
    const uniqeAudits = [ ...new Set(audits.flat())]
    console.log("anwer2 ==", uniqeAudits)


    // answer: 3 start ===== 
    const relevantAudits = uniqeAudits.map(item => {
        return data.audits[item]
    })
    console.log("answer 3 ==",relevantAudits)


    // answer: 4 start ===== 
    const passedAudits = relevantAudits.filter( item  => item.score == 1)
    console.log("answer 4 ===", passedAudits)

    // answer: 5 start ===== 
    const failedAudits = relevantAudits.filter( item  => item.score < 1 && (!item.items || item.items. length < 1))

    console.log("answer 5 ===", failedAudits)


    // answer: 6 start ===== 
    const sortedFailedAudits = failedAudits.sort((a, b) => a.score - b.score)
    console.log(" answer 6 ===", sortedFailedAudits)



    return (
        <div>
            <h2 className='text-2xl'>Please open console to see the "6 JS related " results</h2>
        </div>
    )
}

export default JsAnswers