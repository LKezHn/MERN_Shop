import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/header.js'
import ClientList from './components/ClientsList/clientList';
import CompanyList from './components/CompanyList/companyList';

class App extends Component{    
  
  render(){
      return(
          <Router>
              <Header />
              <Route path='/clients' component={ ClientList }/>
              <Route path='/companies' component={ CompanyList } />
          </Router>
      )
  }
}

export default App;
