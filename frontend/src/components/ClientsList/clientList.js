import React, { Component }  from 'react';
import axios from 'axios';

import './ClientList.css';

export default class ClientList extends Component{
    constructor(props){
        super(props);
        this.uri = 'http://localhost:3400/api';
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
            <div className = ''>
                <div className=''>{this.state.clients.map((client, i) => (
                    <div className = '' key = {i}>
                        <div className= '' id = { client._id } >
                            <h5 className= ''>{client.name}</h5>
                            <div className=''>
                                <h6 className=''>{client.username}</h6>
                                <h6 className=''>{client.email}</h6>
                            </div>
                        </div>
                    </div>
            ))}</div>
          </div>)
    }
}