import React, {useState} from "react";
import {increment, decrement, edit_step, remove, count_down, stop} from "./actions";

const Counter = ({name, value, step, dispatch}) => {

    const [newStep, setNewStep] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(edit_step(name, parseInt(newStep)));
    }

    return (
        <div className={"counter"}>
            <b>Name:</b>{name}<b>Value:</b>{value}<b>Step:</b>{step}
            <button className={"increment btn"} onClick={() => dispatch(increment(name))}>+</button>
            <button className={"decrement btn"} onClick={() => dispatch(decrement(name))}>-</button>
            <button className={"remove btn"} onClick={() => dispatch(remove(name))}>X</button>
            <button className={"count-down btn"} onClick={() => dispatch(count_down(name))}>Count down</button>
            <button className={"stop btn"} onClick={() => dispatch(stop(name))}>Stop</button>
            <form onSubmit={handleSubmit}>
                <input className={"edit-step"} type={"text"} onChange={e => setNewStep(e.target.value)} value={newStep} placeholder={"Edit step"}/>
            </form>
        </div>
    )
}

export default Counter;