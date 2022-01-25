

import React from "react";
import { connect } from "react-redux";
import Card from './card';


const randomNumber = props => {

    const min = parseInt(props.numbers.min)
    const max = parseInt(props.numbers.max)

    const randomN = parseInt(Math.random() * (max - min)) + min

    return (

        <Card green title="Random Number">
            <div>
                <span>
                    <span>Result: </span>
                    <strong>{randomN}</strong>
                    
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

export default connect(mapStateToProps)(randomNumber)