import React, { Component } from 'react';
import Nav from './Nav';
import space from './solarsystem.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <div className="heroShot">
          <div className="quote"><blockquote>The universe is under no obligation to make sense to you</blockquote><span>Neil DeGrasse Tyson</span></div>
          <img src={space} />
        </div>
      </header>
    );
  }
}

export default Header;
