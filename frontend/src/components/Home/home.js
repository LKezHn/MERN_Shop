import React, { Component } from 'react';
import './home.css';

import SignUpForm from '../SignupForm/signup-form';
import first from '../../static/img/first.jpg';

export default class Home extends Component {

    render() {
        return (
            <>
                <h5 className=""><strong>Do you want to buy or sell products?</strong></h5>
                <h3 className=''><strong>Sign Up</strong></h3><hr />
                <SignUpForm />
                <h3 className=''><strong>You're not a company?</strong></h3>
                <h5 className=''>Aqui iria info xd</h5>
                <h5 className=''>Only register in our page and you can start to join our services.</h5>

            </>
        );
    }
}