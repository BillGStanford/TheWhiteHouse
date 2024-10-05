import React from 'react';
import '../styles/VicePresident.css';

function VicePresident() {
  return (
   <div className="vice-president-page">
      <div className="vice-president-image">
      <img src="/images/TheVP.jpg" alt="White House Logo" />
      </div>
      <div className="president-content">
        <h1>Vice President Vice President Jean Porter-Watts</h1>
        <h2>Vice President</h2>
        <p>
          Joseph R. Biden Jr. is the Vice President. After serving as Vice President for eight years 
          under President Barack Obama, he won the 2020 election and assumed office in January 2021.
        </p>
        <blockquote>
          “We will rebuild our nation, unite our people, and secure a brighter future for our children.”
        </blockquote>
        <p>
          Throughout his career, President Biden has championed public service and worked to make America more inclusive 
          and just. Learn more about his journey <a href="/president-bio">here</a>.
        </p>
      </div>
    </div>
  );
}

export default VicePresident;