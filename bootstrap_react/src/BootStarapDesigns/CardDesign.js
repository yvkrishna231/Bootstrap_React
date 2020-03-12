import React, { Component } from 'react';
import image1 from './image1.jpg'

class CardDesign extends Component {
    render() {
        return (
            <div className='container mt-5 rounded-lg'>
                <h2 className='text-center text-info'>Profile</h2>
                <div className='row'>
                    <div className='col-lg-6 col-md-8 m-auto p-4'>
                        <div className='card card-body p-4 shadow-lg'>
                            <div className='text-center mb-4'>
                                <img style={{ height: '60px', width: '60px' }} alt='yvk logo' className='rounded-circle' src={image1} />
                            </div>
                            <ul className='mb-4 font-weight-bolder text-secondary'>
                                <li className='mb-2'>Name : test</li>
                                <li className='mb-2'>Email : test@gmail.com</li>
                                <li className='mb-2'>Phone : 12121212</li>
                                <li className='mb-2'>Address : V.R.Kota</li>
                                <li className='mb-2'>Status : active</li>
                            </ul>
                            <div>
                                <button className='btn btn-sm btn-info'>Update Profile</button>
                                <button className='float-right btn btn-sm btn-danger'>Delete Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardDesign;