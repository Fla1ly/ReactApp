import React from "react";
import { Link } from "react-router-dom";
import teamMembers from "./TeamMembers";

function teamRender() {
    const teamArray = teamMembers.map((member) => (
        <li key={member.id} className='team-member'>
            <div className='team-container'>
                <Link to={`/member/${member.id}`}>
                    <img src={member.profilePicture} alt={member.name} />
                </Link>
                <h2>{member.name}</h2>
                <p>{member.title}</p>
            </div>
        </li>
    ));

    return <div className='team-grid'>{teamArray}</div>;
}


export default teamRender;