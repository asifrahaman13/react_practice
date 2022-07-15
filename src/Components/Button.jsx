import React, { useState } from 'react';
import "./Button.css";

export default function Button() {

    const date = new Date();
    const time_now = new Date().toLocaleTimeString();
    const [currDate, setDate] = useState(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);//Initialise the values.
    const [time, setTime] = useState(`${time_now}`);



    const IncNum = () => {
        const dates = new Date();
        setDate(`${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`);
    }
    const timeChange = () => {
        const dates = new Date();
        setTime(`${dates.getHours()}:${dates.getMinutes()}:${dates.getSeconds()}`);
    }
    setInterval(timeChange, 1000);



    const [color, setColor] = useState();
    const changeLooks = () => {
        setColor("green");
    }
    const revertColor = () => {
        setColor("purple");
    }

    

    return (
        <><div className="back">
            <div className="container">
                <h1>Timestamp you have clicked is as follows: {currDate}</h1>
                <button onClick={IncNum}><h1>Click Me</h1></button>
                <h1>The current time is as  follows: {time}</h1>
                <button className="btn" id="btn" onClick={changeLooks} onDoubleClick={revertColor} style={{ backgroundColor: color }}><h1>Change the color</h1></button>
            </div>
        </div>
        </>
    )
}
