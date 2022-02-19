import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList'
import axios from 'axios';
import './App.css';


function App() {

  const [allDaPics, setAllDaPics] = useState([])


  //On load, get pics
  useEffect(() => {
    getPics()
  }, [])

  // GET
  const getPics = () => {
    console.log('oo now im in getting pics');

    axios.get('/gallery')
      .then(response => {
        console.log('we got all them pics');
        console.log('this is what we see', response.data);
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
    axios.put(`/gallery/like/${allDaPics[0].id}`)
      .then(response => {
        getPics()
       console.log("this is put log", allDaPics[0].id);
      }).catch(err => {
        console.log('looks like no one likes', err);
      })
  }


  console.log('this is what we get', allDaPics);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>
      <GalleryList allPics = {allDaPics} updateLikes={updateLikes}/>
      <button onClick={updateLikes}>hmm</button>
      <img src="images/goat_small.jpg" />
    </div>
  );
}

export default App;
