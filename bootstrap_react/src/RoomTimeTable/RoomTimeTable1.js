import React, { Component } from 'react';

class RoomTimeTable1 extends Component {
    state = {
        data: [
            {
                day: 'monday',
                Person1: 'Krishna',
                Person2: 'Venkat',
                Person3: 'Venkat',
                Person4: 'Krishna',
                Person5: 'Krishna',
                Person6: 'Manoj',
                Person7: 'Venkat',
            },
            {
                day: 'Tuesday',
                Person1: 'Venkat',
                Person2: 'Krishna',
                Person3: 'Krishna',
                Person4: 'Venkat',
                Person5: '',
                Person6: '',
                Person7: '',
            },
            {
                day: 'WednesDay',
                Person1: 'Krishna',
                Person2: 'Venkat',
                Person3: 'Krishna',
                Person4: 'Manoj',
                Person5: '',
                Person6: '',
                Person7: '',
            },
            {
                day: 'Thursday',
                Person1: 'Venkat',
                Person2: 'Krishna',
                Person3: 'Venkat',
                Person4: 'Manoj',
                Person5: 'NextWeek (manoj)',
                Person6: 'NextWeek (Venkat)',
                Person7: 'NextWeek (Krishna)',
            },
            {
                day: 'Friday',
                Person1: 'Krishna',
                Person2: 'Venkat',
                Person3: 'Krishna',
                Person4: 'Manoj',
                Person5: '',
                Person6: '',
                Person7: '',
            },
            {
                day: 'Saturday',
                Person1: 'Venkat',
                Person2: 'Krishna',
                Person3: 'Venkat',
                Person4: 'Manoj',
                Person5: '',
                Person6: '',
                Person7: '',
            },
            {
                day: 'Sunday',
                Person1: 'Krishna',
                Person2: 'Venkat',
                Person3: 'Krishna',
                Person4: 'Manoj',
                Person5: 'NextWeek (Venkat)',
                Person6: 'NextWeek (Krishna)',
                Person7: 'NextWeek (Manoj)',
            },

        ]
    }
    render() {
        return (
            <div className='container m-0'>
                <div className='row'>
                    <div className='col-lg-12 m-auto'>
                        <h1 className=''>Room Time Table</h1>
                        <table className='table table-bordered mt-3 text-center'>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Morning Rice</th>
                                    <th>AfterNoon Curries</th>
                                    <th>Night Rice</th>
                                    <th>Night Curries</th>
                                    <th>Water</th>
                                    <th>Wash Room</th>
                                    <th>Waste</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data && this.state.data.map((val, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <td>{val.day}</td>
                                            <td>{val.Person1}</td>
                                            <td>{val.Person2}</td>
                                            <td>{val.Person3}</td>
                                            <td>{val.Person4}</td>
                                            <td>{val.Person5}</td>
                                            <td>{val.Person6}</td>
                                            <td>{val.Person7}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <p className='text-info'>SplitWise Mandatory...!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomTimeTable1;