import React, { Component } from 'react';
import './App.css';

class BootstrapDesign extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-lg-10 m-auto p-3'>
                        <div className='TopDivTag'>
                            <div className='mb-3'>
                                <b className='mr-5'>Todos</b>
                                <b className=''>Users</b>
                            </div>
                        </div>
                        <button id='' className='btn btn-lg btn-light'>Create User</button>
                        <table id='Table' className='table mt-3'>
                            <thead className='p-3'>
                                <tr className=' bg-light'>
                                    <th className=''>Name</th>
                                    <th className=''>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=''>John Brown</td>
                                    <td>
                                        <b className='text-primary'>Edit</b>
                                        <b className='TableBtag'></b>
                                        <b className='text-primary'>Delete</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=''>Jim Green</td>
                                    <td>
                                        <b className='text-primary'>Edit</b>
                                        <b className='TableBtag'></b>
                                        <b className='text-primary'>Delete</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=''>Joe Black</td>
                                    <td>
                                        <b className='text-primary'>Edit</b>
                                        <b className='TableBtag'></b>
                                        <b className='text-primary'>Delete</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='bottomDivTag'>
                            <div className='mt-3 float-right'>
                                <b className='btn btn-lg btn-light'><i className="fa fa-chevron-left"></i></b>
                                <b className='ml-2 btn btn-lg btn-light'>1</b>
                                <b className='ml-2 btn btn-lg btn-light'><i className="fa fa-chevron-right"></i></b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BootstrapDesign;