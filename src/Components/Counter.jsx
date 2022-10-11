import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }


    handleCounterChange = (value) => {
        // this.setState({
        //     counter: value + this.state.counter
        // }, ()=>console.log(this.state))

        // OR
        this.setState((prev) => {
            return {
                counter: prev.counter + value
            }
        })
    }

    render() {
        const { title } = this.props
        const { counter } = this.state
        return (
            <div>
                <h1>{ title }</h1>
                <h1>{ counter }</h1>
                <button onClick={() => this.handleCounterChange(1)}>Add</button>
                <button onClick={() => this.handleCounterChange(-1)}>Reduce</button>
            </div>
        )
    }
}


export default Counter
