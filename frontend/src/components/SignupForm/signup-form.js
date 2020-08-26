import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './signup-form.css';

class SignUpForm extends Component {

    constructor(props){
        super(props);
        this.emailRegExp = new RegExp(/[\w_]+@[a-z]+\.[a-z]+/);
        this.usernameRegExp = new RegExp(/[\w_]+/);
        this.state = {};
    }

    handleChange = (event) => {
        this.setState( { [event.target.id]: event.target.value })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if(this.isValid(this.state)){
            this.props.history.push({
                pathname: '/signup',
                state: this.state
            });
        }
    }

    isValid = ( { username, email} ) => {
        if(this.usernameRegExp.exec(username) && this.emailRegExp.exec(email)) return true
    }
    

    render() {
        return (
            <>
                <form className='' onSubmit={ this.handleSubmit }>
                    <div className="">
                        <input type="text" onChange={ this.handleChange } className="" id="username" placeholder="Enter an username" />
                    </div>
                    <div className="">
                        <input type="email" onChange={ this.handleChange } className="" id="email" placeholder="Enter your email" />
                    </div>
                    <div>
                        <small>Already Registered?  <Link className='' to='/clients'>Login</Link></small>
                    </div>
                    <button type="submit" className="">Submit</button>
                </form>
            </>
        )
    }
}

export default  withRouter(SignUpForm);