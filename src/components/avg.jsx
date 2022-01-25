

import React from "react";
import Card from './card';


export default props => {

    const min = parseInt(props.min)
    const max = parseInt(props.max)

    return (

        <Card purple title="Average">
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{((max + min)) / 2}</strong>
                </span>
            </div>
        </Card >
    )
}