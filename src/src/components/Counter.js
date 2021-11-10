import { useState } from "react";

/*
    props = {
        label: string
        value: int,
        ids: obj
    }
*/
const Counter = (props) => {
    const [value, setValue] = useState(props.value)

    const minValue = 0
    const maxValue = 60

    return (
        <div>
            <h1 id={props.ids.label}>{props.label}</h1>
            <button id={props.ids.decrement}onClick={()=>setValue((value > minValue) ? (value-1) : minValue)}/>
            <h2 id={props.ids.value}>{value}</h2>
            <button id= {props.ids.increment}onClick={()=>setValue((value < maxValue) ? (value+1) : maxValue)}/>
        </div>
    )
}

export default Counter;