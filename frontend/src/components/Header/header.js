import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component{
    render(){
        return(
            <div>
                <div className='headerStyle'>
                    <button className='Home button'>Home</button>
                    <button className='Clients button' onClick = {this.props.clientFunction}>Clients</button>
                    <button className='Companies button'>Companies</button>
                </div>                
            </div>
        )
    }    
}
