import React, { Component } from 'react';

class App3 extends Component {
    state = {

        todoinput: '',
        todoData: [],
        todoEdit: null,
        editable: false,
        inputEmpty: false,
        sameInput: false,
        todoDataEmpty: false

    }

    inputSubmit = () => {
        if (this.state.todoinput === '') {
            this.setState({ inputEmpty: true, sameInput: false, todoDataEmpty: false })
        } else if (this.state.todoData.indexOf(this.state.todoinput) > -1) {
            this.setState({ sameInput: true, todoinput: '', todoDataEmpty: false })
        } else if (this.state.editable && this.state.todoinput) {
            this.setState(prevState => {
                prevState.todoData[prevState.todoEdit] = prevState.todoinput;
                return {
                    ...prevState,
                    todoEdit: null,
                    todoinput: '',
                    editable: false,
                    todoDataEmpty: false
                }
            })
        } else {
            this.setState({
                todoData: this.state.todoData.concat(this.state.todoinput),
                todoinput: '',
                inputEmpty: false,
                sameInput: false,
                todoDataEmpty: false

            })
        }
    }

    inputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Remove = (ind) => {
        this.setState(prevState => {
            const { todoData } = prevState;
            const copyData = todoData;
            copyData.splice(ind, 1);
            return {
                ...prevState,
                todoData: copyData,
                inputEmpty: false,
                sameInput: false,
                todoDataEmpty: false
            }
        })
    }

    handleEdit = (val, ind) => {
        this.setState({ todoinput: val, todoEdit: ind, editable: true, todoDataEmpty: false })
    }

    RemoveAll = () => {
        this.setState({ todoData: [], sameInput: false, todoDataEmpty: true })
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-6 m-auto text-center shadow p-4'>
                        <h3>Todo Input</h3>
                        <input
                            onChange={this.inputChange}
                            value={this.state.todoinput}
                            name='todoinput'
                            type='text'
                            placeholder='enter your text'
                            className='form-control' />
                        <button
                            onClick={this.inputSubmit}
                            className='btn btn-sm btn-success float-right mt-2'>
                            submit
                            </button>
                        <button
                            onClick={this.RemoveAll}
                            className='btn btn-sm btn-danger float-left mt-2'>
                            Remove All
                            </button>
                        {this.state.inputEmpty && <p className='text-danger text-center mt-2'>Todo input is empty</p>}
                        {this.state.sameInput && <p className='text-danger text-center mt-2'>Todo input already exists</p>}
                        {this.state.todoDataEmpty && <p className='text-danger text-center mt-2'>there is nothing in todoData</p>}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 m-auto p-4 shadow'>
                        <h3 className='text-center'>TodoData output</h3>
                        {this.state.todoData && this.state.todoData.map((val, ind) => {
                            return (
                                <ul className='list-group' key={ind}>
                                    <li className='list-group-item'>
                                        {val}
                                        <button
                                            onClick={() => this.Remove(ind)}
                                            className='btn btn-sm btn-danger float-right'>
                                            Remove
                                        </button>
                                        <button
                                            onClick={() => this.handleEdit(val, ind)}
                                            className='btn btn-sm btn-info mr-1 float-right'>
                                            Edit
                                        </button>
                                    </li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default App3;