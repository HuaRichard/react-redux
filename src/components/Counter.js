import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {this.props.store.dispatch({type: 'INCREMENT'})}
    onDecrement() {this.props.store.dispatch({type: 'DECREMENT'})}

    render() {
        return (
            <div>
                <h1>{this.props.store.getState()}</h1>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;