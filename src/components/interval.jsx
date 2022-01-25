

import './interval.css'
import React from "react";
import Card from './card';


export default props => {

    const {min, max} = props

    return (

        <Card red title="Number Interval">
            <div className='Interval'>
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min} onChange={ e => props.onChangeMin(e.target.value)}></input>
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max} onChange={ e => props.onChangeMax(e.target.value)}></input>
                </span>
            </div>
        </Card >
    )
}