import React, { Component } from 'react';
import axios from 'axios';

import './signup.css';

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.uri = 'http://localhost:3400/api'
        this.state = {
            username: this.props.location.state.username,
            email: this.props.location.state.email
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    saveClient = (event) => {
        event.preventDefault();
        axios.post(`${this.uri}/clients`,this.state)
            .then( (res) => {
                if(res.status === 200){
                    this.props.history.push('/clients');
                } 
            })
    }

    render() {
        return (
            <div className=''>
                <div className=''>
                    <div className=''>
                        <form className='' onSubmit={ this.saveClient}>
                            <div className="">
                                <input type="text" className="" onChange={ this.handleChange } defaultValue={this.state.username} id="username" placeholder="Enter your username" />
                            </div>
                            <div className="">
                                <input type="email" className="" id="email" onChange={ this.handleChange } defaultValue={ this.state.email} placeholder="Enter your email" />
                            </div>
                            <div className="">
                                <input type="text" className="" onChange={ this.handleChange } id="name" placeholder="Enter your name" />
                            </div>
                            <div className="">
                                <input type="password" className="" onChange={ this.handleChange } id="password" placeholder="Enter a password" />
                            </div>
                            <div className=''>
                                <button type="submit" className="">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}