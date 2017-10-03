import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='logo'>Space Exploration</div>
        <div className='navList'>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ourplanets">Our Solar System</Link></li>
            <li><Link to="/house/kitchen">Beyond Our Solar System</Link></li>
            <li><Link to="/house/kitchen">Games</Link></li>
            <li><Link to="/house/kitchen">Login</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
