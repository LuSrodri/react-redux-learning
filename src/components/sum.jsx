

import React from "react";
import { connect } from "react-redux";
import Card from './card';


const sum = props => {

    const min = parseInt(props.numbers.min)
    const max = parseInt(props.numbers.max)

    return (

        <Card blue title="Sum">
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{min+max}</strong>

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

export default connect(mapStateToProps)(sum)