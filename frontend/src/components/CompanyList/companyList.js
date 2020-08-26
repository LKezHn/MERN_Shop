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
            <div className = ''>
                <div className=''>{this.state.companies.map((company, i) => (
                    <div className =''  key = {i}>
                        <div className= '' id = { company._id } >
                            <h5 className= ''>{company.name}</h5>
                            <div className=''>
                                <h6 className=''>Address: {company.address}</h6>
                                <h6 className=''>{company.email}</h6>
                            </div>
                        </div>
                    </div>
            ))}</div>
          </div>)
    }
}