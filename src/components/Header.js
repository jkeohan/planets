import React, { Component } from 'react';
import Nav from './Nav';
import space from './solarsystem.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <div className="heroShot">
          <img src={space} />
        </div>
      </header>
    );
  }
}

export default Header;
