import './App.css';
import { useState } from "react";


import Break from './components/Break'
import Session from './components/Session'
import Timer from './components/Timer'

const defaultApp = {
    breakLength: 5,
    sessionLength: 25
}
   
function App() {
    const [isPaused, setIsPaused] = useState(true)
    const [isSession, setIsSession] = useState(true)

    // Change to use ref hooks.
    const [currentTime, setCurrentTime] = useState()

    const clickPause = () => {
        setIsPaused(!isPaused)
    }

    const clickReset = () => {
        setBreakLength(defaultApp.breakLength)
        setSessionLength(defaultApp.sessionLength)
        setIsPaused(true)
        setIsSession(true)
    }

    return (
        <div className="App">
            <Break length={breakLength} setLength={setBreakLength}/>
            <Session length={sessionLength} setLength={setSessionLength}/>
            { isSession
                ? <Timer length={{minutes: sessionLength, seconds: 0}}/>
                : <Timer length={{minuts: breakLength, seconds: 0}}/>
            }
            <button id="start_stop" onClick={clickPause}></button>
            <button id="reset" onClick={clickReset}></button>
        </div>
    );
}

export default App;
