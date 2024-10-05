import React from 'react';
import '../styles/President.css'; // Import the President.css file

function President() {
  return (
    <div className="president-page">
      <div className="president-image">
      <img src="/images/POTUS.jpg" alt="President Joe Biden" />
      </div>
      <div className="president-content">
        <h1>President Joe Biden</h1>
        <h2>46th President of the United States</h2>
        <p>
          Joseph R. Biden Jr. is the 46th president of the United States. After serving as Vice President for eight years 
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

export default President;
