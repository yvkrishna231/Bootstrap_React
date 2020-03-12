import React from 'react';
import './App.css';



class App extends React.Component {
  state = {


    edit1: false,
    edit2: false,
    edit3: false,


    input1: '',
    editedInput1: null,

    input2: '',
    editedInput2: null,

    input3: '',
    editedInput3: null,

    first: [{
      name1: 'krishna',
      dept1: 'eee',
      ph1: '121212',
    }],

    second: [{
      name2: 'venkat',
      dept2: 'ece',
      ph2: '123123',

    }],
    third: [{
      name3: 'chowdary',
      dept3: 'mech',
      ph3: '123412',
    }],

    Actions: null


  }


  handleOnChangeInput1 = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOnChangeInput2 = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOnChangeInput3 = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }



  handleOnClickRemoveFirst = (ind) => {
    this.setState(prevState => {
      const { first } = prevState;
      first.splice(ind, 1)
      return {
        ...prevState
      }
    })

  }

  handleOnClickRemoveSecond = (ind) => {
    this.setState(prevState => {
      const { second } = prevState;
      second.splice(ind, 1)
      return {
        ...prevState
      }
    })

  }

  handleOnClickRemoveThird = (ind) => {
    this.setState(prevState => {
      const { third } = prevState;
      third.splice(ind, 1)
      return {
        ...prevState
      }
    })
  }

  handleOnClickEditText1 = (val, ind) => {
    this.setState({ edit1: !this.state.edit1, input1: val.name1, input2: val.dept1, input3: val.ph1, editedInput1: ind })
  }

  handleOnClickEditInputText1 = () => {
    this.setState(prevState => {
      console.log(prevState.first[prevState.editedInput1]);


      return {
        ...prevState,
        edit1: !this.state.edit1,
      }
    })
  }

  handleOnClickEditText2 = () => {
    this.setState({ edit2: !this.state.edit2 })
  }

  handleOnClickEditInputText2 = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        edit2: !this.state.edit2
      }
    })
  }

  handleOnClickEditText3 = () => {
    this.setState({ edit3: !this.state.edit3 })
  }

  handleOnClickEditInputText3 = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        edit3: !this.state.edit3
      }
    })
  }


  render() {
    return (
      <React.Fragment>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-10 m-auto text-center p-3 border'>
              <h5 className='float-left font-weight-normal'>Employee <b>Details</b></h5>
              <button

                id='buttonTag'
                className='btn btn-sm btn-info float-right mb-4'>
                <i className="fa fa-plus mr-1" aria-hidden="true"></i>Add New</button>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <React.Fragment>
                    {this.state.first.map((val, ind) => {

                      return (
                        <React.Fragment key={ind}>
                          <tr >
                            {!this.state.edit1 && (<React.Fragment>
                              <td>{val.name1}</td>
                              <td>{val.dept1}</td>
                              <td>{val.ph1}</td>
                            </React.Fragment>)}

                            {this.state.edit1 && (<React.Fragment>
                              <td>
                                <input
                                  name='input1'
                                  onChange={this.handleOnChangeInput1}
                                  className='text-center'
                                  type='text'
                                  value={this.state.input1} /></td>
                              <td>
                                <input
                                  onChange={this.handleOnChangeInput2}
                                  name='input2'
                                  className='text-center'
                                  type='text'
                                  value={this.state.input2} />
                              </td>
                              <td>
                                <input
                                  name='input3'
                                  onChange={this.handleOnChangeInput3}
                                  className='text-center'
                                  type='text'
                                  value={this.state.input3} />
                              </td>
                            </React.Fragment>)}

                            <td>
                              {this.state.edit1 ? <i
                                onClick={this.handleOnClickEditInputText1}
                                className="fa fa-plus-square text-success ml-2"
                                aria-hidden="true"></i> : <i
                                  onClick={() => this.handleOnClickEditText1(val, ind)}
                                  className="fa fa-pencil text-warning ml-2"
                                  aria-hidden="true"></i>}
                              <i
                                onClick={() => this.handleOnClickRemoveFirst(ind)}
                                className="fa fa-trash text-danger ml-5" aria-hidden="true"></i>
                            </td>
                          </tr>
                        </React.Fragment>
                      )
                    })}

                    {this.state.second.map((val, ind) => {

                      return (
                        <React.Fragment key={ind}>
                          <tr>
                            <td>{val.name2}</td>
                            <td>{val.dept2}</td>
                            <td>{val.ph2}</td>
                            <td>
                              {this.state.edit2 ? <i
                                onClick={this.handleOnClickEditInputText2}
                                className="fa fa-plus-square text-success ml-2"
                                aria-hidden="true"></i> : <i
                                  onClick={() => this.handleOnClickEditText2(val, ind)}
                                  className="fa fa-pencil text-warning ml-2"
                                  aria-hidden="true"></i>}
                              <i
                                onClick={() => this.handleOnClickRemoveSecond(ind)}
                                className="fa fa-trash text-danger ml-5" aria-hidden="true"></i>
                            </td>
                          </tr>
                        </React.Fragment>
                      )
                    })}

                    {this.state.third.map((val, ind) => {

                      return (
                        <tr key={ind}>
                          <td>{val.name3}</td>
                          <td>{val.dept3}</td>
                          <td>{val.ph3}</td>
                          <td>
                            {this.state.edit3 ? <i
                              onClick={this.handleOnClickEditInputText3}
                              className="fa fa-plus-square text-success ml-2"
                              aria-hidden="true"></i> : <i
                                onClick={() => this.handleOnClickEditText3(val, ind)}
                                className="fa fa-pencil text-warning ml-2"
                                aria-hidden="true"></i>}
                            <i
                              onClick={() => this.handleOnClickRemoveThird(ind)}
                              className="fa fa-trash text-danger ml-5" aria-hidden="true"></i>
                          </td>
                        </tr>
                      )
                    })}
                  </React.Fragment>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

}


export default App;
