import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Briefing.css';

function Briefing() {
  const briefings = [
    {
      title: "President Joseph R. Biden, Jr. Approves Disaster Declaration for the San Carlos Apache Tribe",
      date: "OCTOBER 04, 2024",
      category: "PRESIDENTIAL ACTIONS",
      link: "/briefing/1",
    },
    {
      title: "Press Release: Bill Signed: H.R. 6513",
      date: "OCTOBER 04, 2024",
      category: "PRESIDENTIAL ACTIONS",
      link: "/briefing/2",
    },
    {
      title: "A Proclamation on Child Health Day, 2024",
      date: "OCTOBER 04, 2024",
      category: "PRESIDENTIAL ACTIONS",
      link: "/briefing/3",
    },
    {
      title: "A Proclamation on National Community Policing Week, 2024",
      date: "OCTOBER 04, 2024",
      category: "PRESIDENTIAL ACTIONS",
      link: "/briefing/4",
    },
    {
      title: "Remarks by Vice President Harris at a Local Event",
      date: "OCTOBER 04, 2024",
      category: "PRESIDENTIAL ACTIONS",
      link: "/briefing/5",
    },
  ];

  return (
    <div className="briefing-room">
      <h1>Briefing Room</h1>
      <div className="briefing-list">
        {briefings.map((brief, index) => (
          <div className="briefing-item" key={index}>
            <Link to={brief.link}>
              <h2>{brief.title}</h2>
            </Link>
            <p>{brief.date} • <span className="category">{brief.category}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Briefing;
