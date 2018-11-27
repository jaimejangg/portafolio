import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";  
import './App.css';

const params = {
  "particles": {
      "number": {
          "value": 300,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      },
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Particles 
            params={params}
            width="100vw"
            height='100vh'
            className="particles"
          />
          <div className='informacion'>
            <h1>
              Jaime Jangg
            </h1>
            <h4 className='subtitulo'>
              Business Innovator 
            </h4>
            <div className='redes'>
              <a 
                className='facebook-icon'
                target="_blank" 
                href='https://www.facebook.com/jaime.jangg'
              >
                <FaFacebookSquare />
              </a>
              <a 
                className='github-icon'
                target="_blank" 
                href='https://github.com/JaimeJangg'
              >
                <FaGithub />
              </a>
              <a 
                className='instagram-icon'
                target="_blank" 
                href='https://www.instagram.com/therealjangg/?hl=es-la'
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
