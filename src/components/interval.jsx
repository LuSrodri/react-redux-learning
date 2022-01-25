

import './interval.css'
import React from "react";
import { connect } from 'react-redux';
import Card from './card';


const interval = props => {

    const min = parseInt(props.numbers.min)
    const max = parseInt(props.numbers.max)

    return (

        <Card red title="Number Interval">
            <div className='Interval'>
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min} readOnly></input>
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max} readOnly></input>
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

export default connect(mapStateToProps)(interval)

