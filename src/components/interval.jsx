

import './interval.css'
import React from "react";
import { connect } from 'react-redux';
import Card from './card';
import { setMinAction, setMaxAction } from '../store/actions/numbers';


const interval = props => {

    const min = parseInt(props.numbers.min)
    const max = parseInt(props.numbers.max)

    return (

        <Card red title="Number Interval">
            <div className='Interval'>
                <span>
                    <strong>Min:</strong>
                    <input type="number" value={min} onChange={ e => props.setMin(e.target.value)}></input>
                </span>
                <span>
                    <strong>Max:</strong>
                    <input type="number" value={max} onChange={ e => props.setMax(e.target.value)}></input>
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

function mapDispathToProps(dispath) {
    return {
        setMin(n) {
            let action = setMinAction(n)
            dispath(action)
        },
        setMax(n) {
            let action = setMaxAction(n)
            dispath(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps )(interval)

