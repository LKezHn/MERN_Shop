import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className=''>
                <nav className="">
                    <Link to='/' className="">Shop</Link>
                    <button className="" type="button">
                        <span className=""></span>
                    </button>
                    <div className="" id="">
                        <div className="">
                            <Link className="" to='/'>Home</Link>
                            <Link className="" to='/clients'>Clients</Link>
                            <Link to='/companies' className="">Companies</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
