import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the White House</h1>
      <section className="response-section">
        <div className="header">
          <h2>New President and Vice President: Sandefer-Watts Administration</h2>
        </div>
        <div className="content">
          <div className="main-article">
          <img src="/images/the_cabinet.jpg" alt="White House Logo" />
            <p>Today I convened leadership of key departments and agencies across the government to ensure we...</p>
          </div>
          <div className="media-cards">
            <div className="card">
              <p>Hurricane Helene in Florida, Georgia, North Carolina, and South Carolina</p>
            </div>
            <div className="card">
              <p>Justice Takes (no) Bribes</p>
            </div>
            <div className="card">
              <p>Danish General Election</p>
            </div>
          </div>
        </div>
      </section>

      <section className="investing-section">
        <h2>Investing in the American People</h2>
        <div className="info-cards">
          <div className="card">Investing in America</div>
          <div className="card">Winning the space race</div>
          <div className="card">AmWorks Program</div>
          <div className="card">Defeating the Vietnamese</div>
        </div>
      </section>


    </div>
  );
}

export default Home;
