import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Pagination from './Pagination';

function App() {
  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:7003/user').then(
      res => { setData(res.data); setPerpage(res.data.slice(0, 10)); }
    )
  }, [])
  const pageHandler = (pageNumber) => {
    setPerpage(data.slice((pageNumber * 10) - 10, pageNumber * 10));
  }
  return (
    <div style={{ width: 'fit-content' }} className="App">
      <h1>PAGINATION</h1>
      {data.length >= 1 ?
        <div>
          {perpage.map(post => <div className='textborder'>{post.email}</div>)} <br />
          <div className='pageboxes'>
            <Pagination data={data} pageHandler={pageHandler} />
          </div>
        </div>
        : null
      }
    </div>
  );
}
export default App;
