import { useState } from "react";

/*
    props = {
        label: string
        value: int,
        ids: obj
    }
*/
const minValue = 0
const maxValue = 60

const Break = props => {
    const [breakLength, setBreakLength] = useState(props.length)

    return (
        <div>
            <h1 id="break-label">Break Length</h1>
            <button id="break-decrement" onClick={setBreakLength((breakLength >= minValue) ? (breakLength-1) : (minValue+1))}/>
            <h2 id="break-length">{props.length}</h2>
            <button id="break-increment" onClick={setBreakLength((breakLength < maxValue) ? (breakLength+1) : maxValue)}/>
        </div>
    )
    
}

export default Break;