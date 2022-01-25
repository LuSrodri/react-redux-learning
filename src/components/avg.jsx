

import React from "react";
import { connect } from "react-redux";
import Card from './card';


const avg = props => {
    
    const min = parseInt(props.numbers.min)
    const max = parseInt(props.numbers.max)

    return (

        <Card purple title="Average">
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{((max+min)/2)}</strong>
                </span>
            </div>
        </Card >
    )
}

const mapStateToProps = state => {
    return {
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(avg)