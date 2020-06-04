const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.post('/api/employees', (req, res) => {
  const employees = [
    {id: 1, firstName: 'Julia', lastName: 'Calandro'},
    {id: 2, firstName: 'Steve', lastName: 'Mason'},
    {id: 3, firstName: 'Joshua', lastName: 'Denham'},
  ];

  res.json(employees);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);