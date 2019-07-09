/* eslint-disable react/jsx-no-target-blank */
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
          <h4>A Web Developer</h4>
          <div className="list-inline-item awsome">
            <a href="https://facebook.com/dragon7794" target="_blank">
              <i class="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a href="https://twitter.com/mrunal7794" target="_blank">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a href="https://linkedin.com/in/mrunal7794" target="_blank">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            &nbsp;
            <a href="https://github.com/mrunal77" target="_blank">
              <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
