import React, { Component } from 'react';
import './Customers.css';
import axios from 'axios';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    axios.get('/api/customers').then(response => {
      this.setState({ customers: response.data });
      console.log('Customers fetched...', response.data);
    });
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.state.customers.map(customer => 
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Customers;
