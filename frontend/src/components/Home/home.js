import React, { Component } from 'react';
import './home.css';

import SignUp from '../Signup/signup-form';
import first from '../../static/img/first.jpg';

export default class Home extends Component {


    render() {
        return (
            <>
                <img src={first} className='first-landing' />
                <div className='m-3 body'>
                    <div className="card content">   
                            <div className="card-body">
                                <h5 className="card-title title"><strong>Do you want to buy or sell products?</strong></h5>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-8'>
                        <div className='pb-3 subcontent'>
                                <h3 className='mx-auto subtitle'><strong>You're not a company?</strong></h3>
                                <h5 className='mx-auto'>Aqui iria info xd</h5>
                                <h5 className='mx-auto'>Only register in our page and you can start to join our services.</h5>
                            </div>
                        </div>
                        <div className='col-sm-4'>
                            <div className='pb-3 subcontent'>
                                <div className='login-card m-2'>
                                    <h3 className='mx-auto'><strong>Sign Up</strong></h3><hr/>
                                    <SignUp />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}