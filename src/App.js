import React from 'react';
import './App.css';
import bannerImage from './Assets/Images/bannerImage.jpg'
//import {Image} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="rounded-circle" src={bannerImage} alt="Mrunal" />
        <h1>Mrunal Meshram</h1>
        <h3>A Web Developer.</h3>
        <i class="fa fa-500px"></i>
      </div>
    </div >
  );
}

export default App;
