import React  from 'react';
import { connect } from 'react-redux';
import {increment, decrement, reset } from '../AC';

const Counter  =  ({increment, decrement, reset, counter})  =>  (
            <div className="container">
                <h1>{counter}</h1>
                <button onClick={increment} className="btn btn-primary mr-3">Increment</button>
                <button onClick={decrement} className="btn btn-success mr-3">Decrement</button>
                <button onClick={reset} className="btn btn-danger">Reset</button>
           </div>
)

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
export default connect(
    mapStateToProps,
    {increment, decrement, reset}
)(Counter);