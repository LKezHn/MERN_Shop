import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {

    render() {
        return (
            <>
                <form className='m-2'>
                    <div className="form-group">
                        <input type="text" className="form-control" id="username" placeholder="Enter an username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                    <div>
                        <small>Already Registered?<Link className='card-link' to='/clients'>Login</Link></small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
}