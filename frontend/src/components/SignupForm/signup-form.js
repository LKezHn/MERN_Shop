import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './signup-form.css';

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.emailRegExp = new RegExp(/[\w_]+@[a-z]+\.[a-z]+/);
    this.usernameRegExp = new RegExp(/[\w_]+/);
    this.state = {};
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid(this.state)) {
      this.props.history.push({
        pathname: '/signup',
        state: this.state
      });
    }
  }

  isValid = ({ username, email }) => {
    if (this.usernameRegExp.exec(username) && this.emailRegExp.exec(email)) return true
  }


  render() {
    return (
      <div className="max-w-sm rounded overflow-hidden mx-auto content-center">
        <div className="px-6 py-4">
          <form className='' onSubmit={this.handleSubmit}>
            <div className="">
              <label className="block text text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input type="text" onChange={this.handleChange} className="mb-3 w-full inline-block input rounded-md px-3 py-2 text-sm font-semibold" id="username" placeholder="Enter an username" />
            </div>
            <div className="">
              <label className="block text text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <input type="email" onChange={this.handleChange} className=" mb-3 w-full inline-block input rounded-md px-3 py-2 text-sm font-semibold" id="email" placeholder="Enter your email" />
            </div>
            <div>
              <span className='text text-xs font-semibold'>Already Registered?</span>  <Link className='link text-xs font-bold' to='/clients'>Login</Link>
            </div>
            <div className=''>
              <button type="submit" className="submit py-2 px-2 rounded-md my-2 w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUpForm);