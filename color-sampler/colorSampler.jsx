import React, { useState } from "react";
import './colorSampler.scss';

function ColorSampler(){

    const [color, setColor] = useState(null);

    return (
    <>
        <div className="colorPicker">
            <label htmlFor="colorPicker"> Write a color: 
                <input name="colorPicker" onChange={event => setColor(event.target.value)}/>
            </label>
            <div style={{width:'20px', height: '20px', backgroundColor: color ? color : 'red'}}></div>
        </div>
    </>);
}

export default ColorSampler;