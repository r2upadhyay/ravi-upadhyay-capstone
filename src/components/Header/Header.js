import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        {/* logo */}
        <div className="header-container">
          <h1>Get Sh*t Done</h1>
        </div>
      </header>
    )
  }
}

export default Header
