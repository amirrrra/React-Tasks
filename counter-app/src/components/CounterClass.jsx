import React from 'react';

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return (
            <>
                <h1>Class Counter: {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        );
    }
}

export default CounterClass;