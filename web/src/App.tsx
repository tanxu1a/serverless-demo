import React from 'react';
import './App.css';
import {useEffect, useState} from 'react'


function App() {
  const [data, setData] = useState('nodata');
  useEffect(() => {
    fetch('https://restless-water-66af.18602863283.workers.dev/',{mode: 'cors'})
  .then(response => response.json())
  .then(data => setData(data));
  }, [])
  return (
    <div className="App">
      {JSON.stringify(data, null , 2)}
    </div>
  );
}

export default App;
