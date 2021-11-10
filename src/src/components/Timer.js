import React from 'react';
import { useState } from "react";

/*
    props = {
        minutes: 
        seconds:
    }
*/
const Timer = props => {
    const [time, setTime] = useState(props.length);
    
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (time.seconds > 0) {
                setTime({...time, seconds: (time.seconds - 1)})
            } else { // Seconds diminished
                if (time.minutes > 0) {
                    setTime({...time, minutes: (time.minutes - 1), seconds: 59})
                } else { // Time's up!

                }
            }
            }, 1000);
    }, [time, props.length])

    const displayTime = () => {
        const seconds = time.seconds < 10 ? ("0" + time.seconds) : time.seconds

        return time.minutes + ":" + seconds
    }
    
    return (
        <div>
            <h1 id="timer-label">Session</h1>
            <h2 id="time-left">{displayTime()}</h2>
        </div>
    )
}

export default Timer;