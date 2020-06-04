import React, { Component } from 'react';
import './Customers.css';
import axios from 'axios';

class Employees extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get('/api/employees').then(response => {
      this.setState({ employees: response.data });
      console.log('Employees fetched...', response.data);
    });
  }

  render() {
    return (
      <div>
        <h2>Employees</h2>
        <ul>
        {this.state.employees.map(employee => 
          <li key={employee.id}>{employee.firstName} {employee.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Employees;
