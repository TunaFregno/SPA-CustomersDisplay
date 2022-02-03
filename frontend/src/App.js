import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {

    axios.get('http://myjson.dit.upm.es/api/bins/bw9t')
      .then((res) => {
        console.log(res);
        setCustomers(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    console.log('in the customers', customers),
    <div className="App">
      <header className="App-header">
       <p>Hello World</p>
      </header>
    </div>
  );
}

export default App;
