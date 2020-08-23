import React, { Component }  from 'react';
import './ClientList.css';

export default class ClientList extends Component{
    render(){
        return(
            <div className = 'container'>
                <div className='row'>{this.props.clients.map((client, i) => (
                    <div className = 'col-4' key = {i}>
                        <div className= 'card' id = { client._id } >
                            <h5 className= 'card-title btn'>{client.name}</h5>
                            <div className='card-body'>
                                <h6 className='card-subtitle'>{client.username}</h6>
                                <h6 className='card-text'>{client.email}</h6>
                            </div>
                        </div>
                    </div>
            ))}</div>
          </div>)}
}