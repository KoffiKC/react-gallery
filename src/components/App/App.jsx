import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import React from 'react';
import './App.css';


function App() {

  const [allDaPics, setAllDaPics] = useState([])


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
        setAllDaPics(response.data)
        //RENDER FUNCTION HERE
      }).catch(err => {
        console.log('camera malfunction :/', err);
      })
  }



  // POST oh wait
  // PUT 
  const updateLikes = () => {
    console.log('ooh this is the put');
    console.log(allDaPics[0].likes);
    axios.put(`/gallery/like/${allDaPics[0].id}`, {dumb: allDaPics})
      .then(response => {
       
      }).catch(err => {
        console.log('looks like no one likes', err);
      })
  }


  console.log(allDaPics[0].likes);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <button onClick={updateLikes}>hmm</button>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
