import axios from 'axios'
import React from 'react'

export class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: [],
            query: "",
            page: 1
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log(this)
        this.setState({
            query: e.target.value
        })
    }

    // onmounting I want to display all the data
    handleAdd() {
        const { query } = this.state
        const payload = {
            title: query,
            status: false
        }
        axios
        .post("https://json-server-mocker-masai.herokuapp.com/tasks", payload)
        .then((res) => {
            this.handleGetTodos()
        })
        .catch((err) => console.log(err))
    }

    handleDelete(id) {
        axios
            .delete(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`)
            .then((res) => this.handleGetTodos())
            .catch((err) => console.log(err))
    }

    handleGetTodos() {
        const { page } = this.state
        return axios
        .get("https://json-server-mocker-masai.herokuapp.com/tasks",{
            params: {
                _limit: 2,
                _page: page
            }
        })
        .then((res) => 
            this.setState (
                {
                    todo: res.data
                },
                () => console.log(this.state)
            )
        )
    }

    componentDidMount() {
       this.handleGetTodos()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.page !== this.state.page) {
            this.handleGetTodos()
        }
    }

    render() {
        const { query, todo } = this.state
        return (
            <>
                <div>
                    <input type="text" placeholder='add something' 
                        value={query}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleAdd.bind(this)}>Add Todo</button>
                    <div>
                        {todo?.map((item) => (
                            <div 
                                key={item.id}
                                style={{
                                    padding: 10,
                                    margin: 2,
                                    border: "1px solid black",
                                    display: 'flex',
                                    justifyContent: "space-between"
                                }}
                            >
                                <div>{item.title}</div>
                                <button onClick={this.handleDelete.bind(this, item.id)}>DELETE</button>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => this.setState({ page: this.state.page - 1})}>prev</button>
                    <button onClick={() => this.setState({ page: this.state.page + 1})}>next</button>
                </div>
            </>
        )
    }
}
