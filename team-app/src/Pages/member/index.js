// MemberPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import teamMembers from '../../Components/Team/TeamMembers';
import Navbar from '../../Components/Navbar/Navbar';
import '../../Assets/Styles/member.css';

function MemberPage() {
  const { id } = useParams();

  const member = teamMembers.find((member) => member.id === parseInt(id, 10));

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className='member-container'>
        <div className='member-wrapper'>
          <div className='member-left-container'>
            <img src={member.profilePicture} alt={member.name} />
          </div>
          <div className='member-right-container'>
            <h1>{member.name}</h1>
            <h2>{member.title}</h2>
            <div className='divider'></div>
            <h3>{member.bio}</h3>
            <div className='member-contact-info'>
              <div className='member-icon-wrapper'>
              <ion-icon name="mail-outline"></ion-icon><p>{member.email}</p>
              </div>
              <div className='member-icon-wrapper'>
                <p><ion-icon name="call-outline"></ion-icon> {member.phone}</p>
              </div>
              <div className='member-icon-wrapper'>
                <p><ion-icon name="pin-outline"></ion-icon> {member.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberPage;
