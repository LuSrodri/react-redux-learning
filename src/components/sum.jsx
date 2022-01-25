

import React from "react";
import Card from './card';


export default props => {

    const min = parseInt(props.min)
    const max = parseInt(props.max)

    return (

        <Card blue title="Sum">
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{(min + max)}</strong>

                </span>
            </div>
        </Card >
    )
}