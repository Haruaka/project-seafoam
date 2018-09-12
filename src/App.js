import React, { Component } from 'react';
import profileImg from './assets/profileimg.jpg';
import './styles/App.css';

import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <div>
            <img src={profileImg} alt="Profile Img" className="profileImg"/>
          </div>
          <div className = "textField">
            <h1>Shanna Sit</h1>
            <h2>Graphic Designer & Front-end Developer</h2>
            <p>
              I’m an undergraduate CS major with a passion in design. Primarily, I’m a Javascript programmer, but I know how to do HTML/CSS and Java as well. I also do designs for print materials and web or mobile mockups.
            </p>
            <ul>
              <li><a href="https://github.com/Haruaka"><i className="fab fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/sit-shanna/"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="ssit002@fiu.edu"><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
