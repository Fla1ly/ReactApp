import React from 'react';
import { useParams } from 'react-router-dom';
import { teamMembers } from '../../Components/Team/TeamMembers';

const UserPage = () => {
  const { id } = useParams();

  const user = teamMembers.find((member) => member.id === parseInt(id));

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.profilePicture} alt={user.name} />
      <p>Bio: {user.bio}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Title: {user.title}</p>
      <p>Location: {user.location}</p>
    </div>
  );
};

export default UserPage;