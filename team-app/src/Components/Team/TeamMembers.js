// TeamMembers.js
import React, { useState } from 'react';
import '../../Assets/Styles/main.css';
import { TeamMembersContext } from './TeamMembersContext';


const TeamMembers = () => {

  /*
    <p>Bio: {member.bio}</p>
    <p>Email: {member.email}</p>
    <p>Phone: {member.phone}</p>
  */

  const teamArray = teamMembers.map((member) => (
    <li key={member.id} className='team-member'>
      <div className='team-container'>
        <a href={`/member/${member.id}`}>
          <img src={member.profilePicture} alt={member.name} />
        </a>
        <h2>{member.name}</h2>
        <p>{member.title}</p>
      </div>
    </li>
  ));

  return (
    <div className='team-grid'>
      {teamArray}
      <TeamMembersContext.Provider value={teamMembers}>
        {router}
      </TeamMembersContext.Provider>
    </div>

  );
};


export default TeamMembers;
