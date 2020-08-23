import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='navbar-div'>
                <nav className="navbar navbar-expand-lg">
                    <Link to='/' className="navbar-brand nav-button">Shop</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-button nav-item nav-link active" to='/'>Home <span className="sr-only">(current)</span></Link>
                            <Link className="nav-button nav-item nav-link" to='/clients'>Clients</Link>
                            <Link to='/companies' className="nav-button nav-item nav-link">Companies</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
