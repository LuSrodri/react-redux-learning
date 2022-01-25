

import './interval.css'
import React from "react";
import Card from './card';


export default props => {

    return (

        <Card red title="Number Interval">
            <div className='Interval'>
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={0} readOnly></input>
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={10} readOnly></input>
                </span>
            </div>
        </Card >
    )
}