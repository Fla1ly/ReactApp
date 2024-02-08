import { useParams } from 'react-router-dom';

function MemberPage({ teamMembers }) {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === Number(id));

  return member ? (
    <div>
      <h1>{member.name}</h1>
      <img src={member.profilePicture} alt={member.name} />
      <p>{member.title}</p>
      {/* other member details */}
    </div>
  ) : (
    <div>Member not found</div>
  );
}