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

const Session = props => {
    const [sessionLength, setSessionLength] = useState(props.length)

    return (
        <div>
            <h1 id="session-label">Session Length</h1>
            <button id="session-decrement" onClick={setSessionLength((sessionLength > minValue) ? (sessionLength-1) : minValue)}/>
            <h2 id="session-length">{sessionLength}</h2>
            <button id="session-increment" onClick={setSessionLength((sessionLength < maxValue) ? (sessionLength+1) : maxValue)}/>
        </div>
    )
}

export default Session;