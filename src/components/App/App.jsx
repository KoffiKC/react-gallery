import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import React from 'react';
import './App.css';


function App() {

  //On load, get guests
  useEffect(() => {
    getPics()
  }, [])

  // GET
  const getPics = () => {
    console.log('oo now im in getting pics');

    axios.get('/gallery')
      .then(response => {
        console.log('we got all them pics');
        //RENDER FUNCTION HERE
      }).catch(err => {
        console.log('camera malfunction :/', err);
      })
  }



  // POST oh wait




  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
