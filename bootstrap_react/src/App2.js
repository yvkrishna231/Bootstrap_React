import React, { Component } from 'react';
import './App.css';

class App2 extends Component {
    state = {
        data: [],
        editable: false,
        error: false
    }

    handleOnClickAddNew = () => {
        this.setState(prevState => {
            prevState.data.push(
                { name: '', department: '', phone: '', edit: true }
            )
            return {
                ...prevState,
                editable: true
            }
        })
    }

    addEmployee = ind => {
        this.setState(prevState => {
            const copyData = [...prevState.data];
            const { name, department, phone } = copyData[ind];
            copyData[ind] = {
                name, department, phone, edit: false
            }
            if (this.checkFields(name, department, phone)) {

                // copyData.concat(details);
                return {
                    ...prevState,
                    data: copyData,
                    editable: false
                }
            } else {
                return {

                    editable: true
                }
            }

        })
    }

    checkFields = (name, department, phone) => {
        return name.trim().length !== 0 && department.trim().length !== 0 && phone.trim().length !== 0
    }

    onChangeInput = (e, index, type) => {
        this.state.data[index][type] = e.target.value;
        this.setState({ data: this.state.data });
    }

    editEmployee = (ind) => {
        this.setState(prevState => {
            const editCopyData = [...prevState.data];
            if (editCopyData) {
                editCopyData[ind].edit = true
                return {
                    ...prevState,
                    data: editCopyData,
                    editable: true,
                    error: true
                }
            }
        })
    }

    RemoveData = (ind) => {
        this.setState({ data: this.state.data.filter((val, i) => i !== ind), editable: false })
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-8 m-auto border p-3'>
                        <h5 className='float-left font-weight-normal'>Employee <b>Details</b></h5>
                        <button
                            disabled={this.state.editable}
                            onClick={this.handleOnClickAddNew}
                            id='buttonTag'
                            className='btn btn-sm btn-info float-right mb-4'>
                            <i className="fa fa-plus mr-1" aria-hidden="true"></i>Add New</button>
                        <table className='table table-bordered text-center'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data && this.state.data.map((val, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>
                                                {
                                                    val.edit && this.state.editable ?
                                                        <input
                                                            className='form-control p-0 text-center'
                                                            value={val.name}
                                                            onChange={(e) => this.onChangeInput(e, ind, 'name')}
                                                            placeholder="name" />
                                                        :
                                                        val.name
                                                }

                                            </td>
                                            <td>
                                                {
                                                    val.edit ?
                                                        <input
                                                            className='form-control p-0 text-center'
                                                            value={val.department}
                                                            onChange={(e) => this.onChangeInput(e, ind, 'department')}
                                                            placeholder="Department" />
                                                        :
                                                        val.department
                                                }

                                            </td>
                                            <td>
                                                {
                                                    val.edit && this.state.editable ?
                                                        <input
                                                            className='form-control p-0 text-center'
                                                            value={val.phone}
                                                            onChange={(e) => this.onChangeInput(e, ind, 'phone')}
                                                            placeholder="Phone" />
                                                        :
                                                        val.phone
                                                }

                                            </td>
                                            <td>
                                                {
                                                    !val.edit ?
                                                        <i
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => this.editEmployee(ind)}
                                                            className="fa fa-pencil text-warning ml-2"></i>
                                                        :
                                                        <i
                                                            style={{ cursor: 'pointer' }}
                                                            onClick={() => this.addEmployee(ind)}
                                                            className="fa fa-plus text-success ml-2"></i>
                                                }
                                                <i
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => this.RemoveData(ind)}
                                                    className="fa fa-trash text-danger ml-5">
                                                </i>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default App2;