import React from 'react';
import '../styles/Cabinet.css';

function Cabinet() {
  const cabinetMembers = [
    { name: 'Jean Porter-Watts', position: 'Vice President of the United States' },
    { name: 'Vacant', position: 'Secretary of State' },
    { name: 'Vacant', position: 'Secretary of the Treasury' },
    { name: 'Vacant', position: 'Secretary of Defense' },
    { name: 'Vacant', position: 'Attorney General' },
    { name: 'Vacant', position: 'Secretary of the Interior' },
    { name: 'Vacant', position: 'Secretary of Agriculture' },
    { name: 'Vacant', position: 'Secretary of Commerce' },
    { name: 'Vacant', position: 'Secretary of Labor' },
    // Add more members as needed
  ];

  return (
    <div className="cabinet-container">
      <h1 className="title">The Cabinet</h1>
      <p className="description">
        The Cabinet's role is to advise the President on any subject relating to the duties of each member's office.
      </p>
      <div className="cabinet-members">
        {cabinetMembers.map((member, index) => (
          <div key={index} className="cabinet-member">
            <img
              src={`/path-to-${member.name.toLowerCase().replace(' ', '-')}-image.jpg`}
              alt={member.name}
              className="cabinet-member-photo"
            />
            <div className="cabinet-member-details">
              <h2 className="cabinet-member-name">{member.name}</h2>
              <p className="cabinet-member-position">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cabinet;
