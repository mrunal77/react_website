import React from 'react';
import './App.css';
import bannerImage from './Assets/Images/bannerImage.jpg'
//import {Image} from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="card">
          <span class="">
            <img className="rounded-circle" src={bannerImage} alt="Mrunal" />
          </span>
          <h1>Mrunal Meshram</h1>
          <h4>A Web Developer.</h4>
          <div className="list-inline-item awsome">
            <i class="fa fa-facebook-square" aria-hidden="true"></i>
            &nbsp;
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
            &nbsp;
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            &nbsp;
          <i class="fa fa-github-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
