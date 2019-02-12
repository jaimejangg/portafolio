import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Modal from 'react-responsive-modal';
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
              "speed": 6,
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
              "distance": 200,
              "duration": 3
          }
      }
  }
}

class App extends Component {

  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
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
            <h1 onClick={this.onOpenModal}>Jaime Jangg</h1>
            <Modal 
              open={open} 
              onClose={this.onCloseModal} 
              center
              >
              <h2>Hola soy Jaime Jangg te cuento un poco de mi</h2>
              <p>
                🇲🇽
                Soy una persona apasionada por la innovacion, desde pequeño me ha
                gustado crear cosas para mejorar a las personas y sociedades
                interesado por el comportamiento de las sociedades fue que estudie
                una Licenciatura en Negocios Internacionales y una especialidad en
                Desarrollo de Software lo cual me ha permitido crear lo que pienso
                con creatividad e innovacion, contactame para trabajar en tu proyecto
                increible contigo.
                <br></br>
                <br></br>
                🇺🇸
                I am a passionate person for innovation, since I was a child
                liked to create things to improve people and societies
                interested in the behavior of the societies was that I studied
                a Bachelor of International Business and a specialty in
                Software development which has allowed me to create what I think
                With creativity and innovation, contact me to work on your incredible
                project with you.
                <br/>
                <br/>
                with ❤️ Jaime Jangg.
              </p>
            </Modal>
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
