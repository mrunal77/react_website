import React, { Component } from 'react';
import './App.css';
import bannerImage from './Assets/Images/bannerImage.jpg'
import './social_icons/social'
import Social from './social_icons/social';
import Tada from 'react-reveal/Tada';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tada>
          <header className="App-header">
            <card className="card">
              <img className="rounded-circle" src={bannerImage} alt="Mrunal" />
              <h1>Mrunal Meshram</h1>
              <h4>A Web Developer</h4>
              <div className="awsome">
                <Social />
              </div>
            </card>
          </header>
        </Tada>
      </div >
    );
  }
}

export default App;
