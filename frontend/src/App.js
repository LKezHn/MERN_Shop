import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header.js'
import ClientList from './components/ClientsList/clientList';

class App extends Component{    
  constructor(props){
      super(props);
      this.uri = 'http://localhost:3400/api';
      this.state = { clients: [] };
      this.showClients = this.showClients.bind(this);
  }
  
  showClients(){
      console.log("Debugging GET method");
      fetch(`${this.uri}/clients`,{ accept: 'application/json' })
              .then( res => res.json()
              ).then( clients =>this.setState( { clients : clients })
              ).catch(console.err);
  }
  
  render(){
      return(
          <div>
              <Header clientFunction = {this.showClients} />
              <ClientList  clients = {this.state.clients} />
          </div>
      )
  }
}

export default App;
