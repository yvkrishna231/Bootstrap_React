import React from 'react';


class App1 extends React.Component {

    state = {
        error: true,
        data1: [
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 }
        ],
        data2: [
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 },
            { id: 1, value: 0 }
        ],
        // data3: [
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 }
        // ],
        // data4: [
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 },
        //     { id: 1, value: 0 }
        // ]
    }

    handleOnClick1 = (ind) => {
        this.setState(prevState => {
            const { data1 } = prevState;
            const copyData = data1;
            copyData[ind].value = 500;
            return {
                ...prevState,
                data1: copyData,
                error: false
            }
        })
    }

    handleOnClick2 = (ind) => {
        this.setState(prevState => {
            const { data1 } = prevState;
            const copyData = data1;
            copyData[ind].value = copyData[ind].value - 500;
            return {
                ...prevState,
                data1: copyData,
                error: false
            }
        })
    }

    handleOnClick3 = (ind) => {
        this.setState(prevState => {
            const { data2 } = prevState;
            const copyData = data2;
            copyData[ind].value = 500;
            return {
                ...prevState,
                data2: copyData,
                error: true
            }
        })
    }

    render() {

        const totalData1 = this.state.data1.reduce((acc, val) => {
            acc += val.value;
            return acc
        }, 0);

        const totalData2 = this.state.data2.reduce((acc, val) => {
            acc += val.value;
            return acc
        }, 0)
        return (
            <div className='row text-center mt-5'>

                <div className='col-1 pr-0'>
                    {this.state.data1.map((val, ind) => {
                        return (
                            <div>
                                {this.state.error ? <input
                                    onClick={() => this.handleOnClick1(ind)}
                                    className='mr-1' type='checkbox' /> : <input
                                        onClick={() => this.handleOnClick2(ind)}
                                        className='mr-1' type='checkbox' />}
                            </div>
                        )
                    })}
                </div>

                <div className='col-1 pl-0'>
                    {this.state.data2.map((val, ind) => {
                        return (
                            <div>
                                <input onClick={() => this.handleOnClick3(ind)} className='mr-1' type='checkbox' />
                            </div>
                        )
                    })}
                </div>
                <h1>total no of tickets value {totalData1 + totalData2}</h1>
            </div>
        )
    }
}

export default App1;