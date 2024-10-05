import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
        <img src="/images/US-WhiteHouse-Logo.png" alt="White House Logo" />
        </div>
        <nav>
          <ul className="nav-menu">
          <li><Link to="/"> The White House</Link></li>
            <li><Link to="/administration">Administration</Link></li>
            <li><Link to="/priorities">Priorities</Link></li>
            <li><Link to="/the-record">The Record</Link></li>
            <li><Link to="/briefing-room">Briefing Room</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
