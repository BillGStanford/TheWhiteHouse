import React from 'react';
import '../styles/Briefing.css'; // Reusing the same CSS for article styling

function BriefingArticle({ match }) {
  const articles = {
    "1": {
      title: "President Joseph R. Biden, Jr. Approves Disaster Declaration for the San Carlos Apache Tribe",
      date: "OCTOBER 04, 2024",
      content: "Today, President Joseph R. Biden, Jr. made additional disaster assistance available to the State of South Carolina by authorizing an increase in the level of Federal funding for emergency work undertaken in the State of South Carolina as a result of Hurricane Helene beginning on September 25, 2024, and continuing."
    },
    "2": {
      title: "Press Release: Bill Signed: H.R. 6513",
      date: "OCTOBER 04, 2024",
      content: "The President has signed into law: H.R. 6513, an act that..."
    },
    "3": {
      title: "A Proclamation on Child Health Day, 2024",
      date: "OCTOBER 04, 2024",
      content: "On Child Health Day, we recognize the importance of ensuring..."
    },
    "4": {
      title: "A Proclamation on National Community Policing Week, 2024",
      date: "OCTOBER 04, 2024",
      content: "This week, we reaffirm our commitment to fostering trust..."
    },
    "5": {
      title: "Remarks by Vice President Harris at a Local Event",
      date: "OCTOBER 04, 2024",
      content: "Vice President Harris delivered remarks today at an event celebrating..."
    },
  };

  const article = articles[match.params.id];

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p className="date">{article.date}</p>
      <div className="content">
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export default BriefingArticle;
