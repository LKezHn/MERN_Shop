import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

  constructor(props){
    super(props);
    this.status = React.createRef();
  }


  change = () => {
    if( this.status.current.style.display === 'block') this.status.current.style.display = 'none';
    else this.status.current.style.display = 'block';
  }

  render() {
    return (
      <nav className="flex items-center justify-between navbar-div flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to='/' className="font-semibold text-xl tracking-tight">Shop Title</Link>
        </div>
        <div className="block lg:hidden">
          <button onClick={this.change} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div ref={this.status} className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to='/' className="block mt-4 lg:inline-block lg:mt-0 nav-link mr-4">
              Home
                        </Link>
            <Link to='/clients' className="block mt-4 lg:inline-block lg:mt-0 nav-link mr-4">
              Clients
                        </Link>
            <Link to='/companies' className="block mt-4 lg:inline-block lg:mt-0 nav-link">
              Companies
                        </Link>
          </div>
          <div>
            <Link to='/signup' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent nav-button mt-4 lg:mt-0">
              Sign Up
                        </Link>
          </div>
        </div>
      </nav>
    )
  }
}
