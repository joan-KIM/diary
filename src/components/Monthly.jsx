import React from "react";

export default function Monthly({changeHandler}) {
    return(
        <div className='monthly'>
            <input type='datetime-local' onChange={e => changeHandler(e.target.value)}></input>
        </div>
    )
}