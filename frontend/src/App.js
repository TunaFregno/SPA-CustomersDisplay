import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {matchSorter} from 'match-sorter';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import ClientCard from './components/ClientsCard';
import SideNav from './components/SideNav';
import sortClients from './components/Functions/sortClients';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortClicked, setSort] = useState([]);

  useEffect(() => {

    axios.get('http://myjson.dit.upm.es/api/bins/bw9t')
    .then((res) => {
        console.log(res);
        setData(res.data)
    })
    .catch((err) => console.log(err));

  }, [sortClicked, searchResults ])

  const searchHandler = (search) => {
    setSearch(search)
    let newData = [];
    if ( search !== '') {
      newData = matchSorter(data, search, {keys: ['firstName', 'lastName']}) 
    }
    setSearchResults(newData)
  }

  const sortedByRisk =(key) => {
    let dataArr = data;
    return setSort(sortClients(key, dataArr)) 
  }

  return (
    <div className='outterbox'>
      <Header/>
      <div className='innerbox'> 
        <Row className='Row'>
          <Col sm={5} className='Col'>
            <SideNav
            search={search}
            searchFunc={searchHandler}
            sortFunc={sortedByRisk}
           />
          </Col>
          <Col sm={7} className='Col'>
            <ClientCard
            data={searchResults.length < 1 ? data : searchResults }
            dataSort={sortClicked}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
