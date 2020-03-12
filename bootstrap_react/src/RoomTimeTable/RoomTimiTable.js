import React, { Component } from 'react';

class RoomTimiTable extends Component {
    render() {
        return (
            <div className='m-5'>
                <h1 className='text-center'>Room Time Table</h1>
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
                        <tr>
                            <td>Monday</td>
                            <td>Krishna</td>
                            <td>venkat</td>
                            <td>Venkat</td>
                            <td>Krishna</td>
                            <td>Krishna</td>
                            <td>manoj</td>
                            <td>venkat</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>venkat</td>
                            <td>Krishna</td>
                            <td>venkat</td>
                            <td>manoj</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>krishna</td>
                            <td>venkat</td>
                            <td>krishna</td>
                            <td>manoj</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>venkat</td>
                            <td>krishna</td>
                            <td>krishna</td>
                            <td>venkat</td>
                            <td>next week manoj</td>
                            <td>next week venkat</td>
                            <td>next week Krishna</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>krishna</td>
                            <td>venkat</td>
                            <td>krishna</td>
                            <td>manoj</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>manoj</td>
                            <td>Krishna</td>
                            <td>Venkat</td>
                            <td>manoj</td>
                            <td>next week venkat</td>
                            <td>next week Krishna</td>
                            <td>next week manoj</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>krishna</td>
                            <td>venkat</td>
                            <td>krishna</td>
                            <td>manoj</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                    <p className='text-center text-info'>SplitWise Manditory...!</p>
            </div>
        );
    }
}

export default RoomTimiTable;