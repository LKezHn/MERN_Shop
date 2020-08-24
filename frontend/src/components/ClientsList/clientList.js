import React, { Component }  from 'react';
import axios from 'axios';

import './ClientList.css';

export default class ClientList extends Component{
    constructor(props){
        super(props);
        this.uri = 'http://localhost:3400/api'
        this.state = { clients : [] };
    }

    componentWillMount = () => {
        console.log("Debugging GET method");
        axios.get(`${this.uri}/clients`)
                .then( res => this.setState( { clients : res.data })
                ).catch(console.err);
    }

    render(){
        return(
            <div className = 'container mx-auto'>
                <div className='row'>{this.state.clients.map((client, i) => (
                    <div className = 'col-4' key = {i}>
                        <div className= 'card client' id = { client._id } >
                            <h5 className= 'card-title client-name'>{client.name}</h5>
                            <div className='card-body'>
                                <h6 className='card-subtitle'>{client.username}</h6>
                                <h6 className='card-text'>{client.email}</h6>
                            </div>
                        </div>
                    </div>
            ))}</div>
          </div>)
    }
}