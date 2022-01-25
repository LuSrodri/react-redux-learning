

import React from "react";
import Card from './card';


export default props => {

    const min = parseInt(props.min)
    const max = parseInt(props.max)
    const randomNumber = parseInt(Math.random() * (max - min)) + min

    return (

        <Card green title="Random Number">
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{randomNumber}</strong>
                    
                </span>
            </div>
        </Card >
    )
}