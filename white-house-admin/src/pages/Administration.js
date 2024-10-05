import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Administration.css';

function Administration() {
  return (
    <div className="administration">
      <h1>Sandefer-Watts Administration</h1>
      <div className="admin-grid">
        <Link to="/president" className="admin-item">
          <img src="/images/POTUS.jpg" alt="President Joe Biden" />
          <h2>President Tomas Sandefer</h2>
        </Link>
        <Link to="/vice-president" className="admin-item">
        <img src="/images/TheVP.jpg" alt="White House Logo" />
          <h2>Vice President Jean Porter-Watts</h2>
        </Link>
        <Link to="/cabinet" className="admin-item">
          <img src="/images/the_cabinet.jpg" alt="The Cabinet" />
          <h2>The Cabinet</h2>
        </Link>
        {/* Add more administration members as needed */}
      </div>
    </div>
  );
}

export default Administration;