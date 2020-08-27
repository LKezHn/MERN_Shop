import React, { Component } from 'react';
import axios from 'axios';

import './ClientList.css';

export default class ClientList extends Component {
    constructor(props) {
        super(props);
        this.uri = 'http://localhost:3400/api';
        this.state = { clients: [] };
    }

    componentWillMount = () => {
        console.log("Debugging GET method");
        axios.get(`${this.uri}/clients`)
            .then(res => this.setState({ clients: res.data })
            ).catch(console.err);
    }

    render() {
        return (
            <div className=' mx-0 sm:mx-auto h-auto sm:h-screen client-list'>
                <div className='grid grid-cols-1 gap-1 lg:gap-3 sm:grid-cols-3 ml-1 client-list'>{this.state.clients.map((client, i) => (
                    <div className='w-3/4 sm:w-full md:w-4/5 lg:w-full client-card my-3 max-w-sm mx-auto sm:mx-5 md:mx-2 lg:mx-5 rounded overflow-hidden shadow-lg' key={i}>
                        <div className='font-extrabold text-xl mb-2' id={client._id} >
                            <h5 className='my-2 text-center'>{client.name}</h5>
                        </div>
                        <div>
                            <div className='client-content text-lg px-6 py-2'>
                                <h6 className='my-1 text-md font-semibold'>{client.username}</h6>
                                <h6 className='my-1 text-sm'>{client.email}</h6>
                            </div>
                        </div>
                    </div>
                ))}</div>
            </div>)
    }
}