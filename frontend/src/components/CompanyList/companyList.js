import React, { Component }  from 'react';
import axios from 'axios';

import './CompanyList.css';

export default class CompanyList extends Component{
    constructor(props){
        super(props);
        this.uri = 'http://localhost:3400/api'
        this.state = { companies : [] };
    }

    componentWillMount = () => {
        console.log("Debugging GET method");
        axios.get(`${this.uri}/companies`)
                .then( res => this.setState( { companies : res.data })
                ).catch(console.err);
    }

    render(){
        return(
            <div className = 'container mx-auto'>
                <div className='row'>{this.state.companies.map((company, i) => (
                    <div className = 'col-4' key = {i}>
                        <div className= 'card company' id = { company._id } >
                            <h5 className= 'card-title company-name'>{company.name}</h5>
                            <div className='card-body'>
                                <h6 className='card-subtitle'>Address: {company.address}</h6>
                                <h6 className='card-text'>{company.email}</h6>
                            </div>
                        </div>
                    </div>
            ))}</div>
          </div>)
    }
}