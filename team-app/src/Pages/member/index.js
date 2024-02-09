// MemberPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import teamMembers from '../../Components/Team/TeamMembers'; // Adjust the path accordingly

function MemberPage() {
  const { id } = useParams();

  // Find the team member with the matching id
  const member = teamMembers.find((member) => member.id === parseInt(id, 10));

  if (!member) {
    // Handle the case where the member is not found (optional)
    return <div>Member not found</div>;
  }

  return (
    <div>
      <h1>{member.name}</h1>
      <img src={member.profilePicture} alt={member.name} />
      <p>Bio: {member.bio}</p>
      <p>Email: {member.email}</p>
      <p>Phone: {member.phone}</p>
      {/* Add other member details as needed */}
    </div>
  );
}

export default MemberPage;
