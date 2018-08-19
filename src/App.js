import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div>
          <div>
          </div>
          <div className="content">
            <h1>My Name Here</h1>
            <h2>Graphic Designer & Front-end Developer</h2>
            <p>
              I’m an undergraduate CS major with a passion in design. Primarily, I’m a Javascript programmer, but I know how to do HTML/CSS and Java as well. I also do designs for print materials and web or mobile mockups.
              </p>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
