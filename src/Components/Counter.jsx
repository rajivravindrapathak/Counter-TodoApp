import React from 'react'

    // sugar syntax
    class Counter extends React.Component {
        constructor(props) {
            super(props)
            //initialize
            //state management
            this.state = {
                counter: 0
            }
            // single object
        }
        handleCounterChange = (value) => {
            //patch
            this.setState({
                counter: value + this.state.counter
            })
        }

    render() {
        const { title } = this.props
        const { counter } = this.state
    
        return (
            <div>
                <h1>{ title } </h1>
                <h2> {counter} </h2>
                <button onClick={() => this.handleCounterChange(1)}>Add</button>
                <button onClick={() => this.handleCounterChange(-1)}>Reduce</button>
            </div>
        )
    }
}

export default Counter
