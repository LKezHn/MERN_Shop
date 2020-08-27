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
            <div className='mx-auto h-screen client-list'>
                <div className='grid grid-cols-1 gap-1 lg:gap-3 md:grid-cols-3 ml-2 company-list'>{this.state.companies.map((company, i) => (
                    <div className='companies-card w-3/4 sm:w-full md:w-4/5 lg:w-full my-3 max-w-sm mx-auto sm:mx-5 md:mx-2 lg:mx-5 rounded overflow-hidden shadow-lg' key={i}>
                        <div className='font-extrabold text-xl mb-2' id={company._id} >
                            <h5 className='my-2 text-center'>{company.name}</h5>
                        </div>
                        <div>
                            <div className='company-content text-lg px-6 py-2'>
                                <h6 className='my-1 text-md font-semibold'>{company.username}</h6>
                                <h6 className='my-1 text-sm'>{company.email}</h6>
                            </div>
                        </div>
                    </div>
                ))}</div>
            </div>)
    }
}