import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    employees: [],
    freshEmployee: false
  }
  addEmplyee = () => {
    this.setState(prevState => {
      const { employees } = prevState;
      const details = {
        name: '',
        department: '',
        phone: '',
        edit: true
      }
      const newEmployee = [...employees];
      newEmployee.push(details);
      return {
        ...prevState,
        employees: newEmployee,
        freshEmployee: true
      }
    });
  }

  handleOnChange = (event, index, type) => {
    const copyEmployee = [...this.state.employees];
    copyEmployee[index][type] = event.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        employees: copyEmployee
      }
    });
  }

  addEmployee = index => {
    this.setState(prevState => {
      const copyEmployee = [...prevState.employees];
      const { name, department, phone } = copyEmployee[index];

      if (this.checkFields(name, department, phone)) {


        return {
          ...prevState,
          employees: copyEmployee,
          freshEmployee: false
        }
      } else {
        alert("Enter all fields");
      }
    })
  }

  checkFields = (name, department, phone) => {
    return name.trim().length !== 0 && department.trim().length !== 0 && phone.trim().length !== 0
  }
  deleteEmployee = index => {
    if (this.state.employees.length > 0) {
      this.setState({ employees: this.state.employees.filter((_, i) => i !== index), freshEmployee: false });
    }
  }
  editEmployee = index => {
    this.setState(prevState => {
      const getEditData = [...prevState.employees];
      if (getEditData) {
        getEditData[index].edit = true;
        return {
          ...prevState,
          employees: getEditData
        }
      }
    })
  }
  render() {
    const { freshEmployee, employees } = this.state;
    return (
      <div className="container mt-5 My_APP">
        <div className="card card-body">
          <h2>
            Employee Details
            <button id='buttonIclass' disabled={freshEmployee} className="btn btn-sm btn-primary float-right" onClick={this.addEmplyee}>
              <i className="fa fa-plus mr-1"></i>
              Add New
            </button>
          </h2>
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees && employees.map((employee, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {employee.edit ?
                        <input
                          className="form-control"
                          type="text"
                          placeholder="name"
                          name="name"
                          value={employee.name}
                          onChange={(event) => this.handleOnChange(event, index, 'name')} />
                        : employee.name
                      }
                    </td>
                    <td>
                      {employee.edit ?
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Department"
                          name="department"
                          value={employee.department}
                          onChange={(event) => this.handleOnChange(event, index, 'department')} />
                        : employee.department
                      }
                    </td>
                    <td>
                      {employee.edit ?
                        <input
                          className="form-control"
                          type='number'
                          placeholder="Phone number"
                          name="phone"
                          value={employee.phone}
                          onChange={(event) => this.handleOnChange(event, index, 'phone')} />
                        : employee.phone
                      }
                    </td>
                    <td>
                      {
                        !employee.edit ?
                          <button className="btn btn-sm btn-warning" onClick={() => this.editEmployee(index)}>
                            <i className="fa fa-pencil"></i>
                          </button>
                          :
                          <button className="btn btn-sm btn-success" onClick={() => this.addEmployee(index)}>
                            <i className="fa fa-check-square-o"></i>
                          </button>
                      }
                      <button
                        onClick={() => this.deleteEmployee(index)}
                        className="btn btn-sm btn-danger ml-2">
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
