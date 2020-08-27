import React, { Component } from 'react';
import axios from 'axios';

import './signup.css';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.uri = 'http://localhost:3400/api';
    this.state = {};
  }

  componentWillMount = () => {
    if (this.props.location.state === undefined) this.setState({ username: '', email: '' });
    else {
      this.setState({
        username: this.props.location.state.username,
        email: this.props.location.state.email
      })
    }

  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  saveClient = (event) => {
    event.preventDefault();
    axios.post(`${this.uri}/clients`, this.state)
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push('/clients');
        }
      })
  }

  render() {
    return (
      <div className="m-0 w-full h-screen signup-section">
        <div className="max-w-sm rounded mx-auto overflow-hidden">
          <div className="px-6 py-4 my-20 card">
            <form onSubmit={this.saveClient}>
              <div>
                <label className="block text text-sm font-bold mb-2" htmlFor="username">
                  Username
          </label>
                <input type="text" onChange={this.handleChange} defaultValue={this.state.username} className="mb-3 w-full inline-block input rounded-md px-3 py-2 text-sm font-semibold" id="username" placeholder="Enter an username" />
              </div>
              <div>
                <label className="block text text-sm font-bold mb-2" htmlFor="username">
                  Email
          </label>
                <input type="email" onChange={this.handleChange} defaultValue={this.state.email} className=" mb-3 w-full inline-block input rounded-md px-3 py-2 text-sm font-semibold" id="email" placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text text-sm font-bold mb-2" htmlFor="name">
                  Name
          </label>
                <input type="text" onChange={this.handleChange} className=" mb-3 w-full inline-block input rounded-md px-3 py-2 text-sm font-semibold" id="name" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text text-sm font-bold mb-2" htmlFor="password">
                  Password
          </label>
                <input type="password" onChange={this.handleChange} className=" mb-3 w-full inline-block input rounded-md px-3 py-2 text-sm font-semibold" id="password" placeholder="Enter your password" />
              </div>
              <div>
                <button type="submit" className="submit py-2 px-2 rounded-md my-2 w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}