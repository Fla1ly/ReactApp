import React from 'react';

const Team = () => {

    const team = {
        'John Doe': {
            title: 'CEO',
            image: 'https://via.placeholder.com/150',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        'Jane Doe': {
            title: 'CTO',
            image: 'https://via.placeholder.com/150',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        'Jim Doe': {
            title: 'CFO',
            image: 'https://via.placeholder.com/150',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        'Jill Doe': {
            title: 'COO',
            image: 'https://via.placeholder.com/150',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        'Jack Doe': {
            title: 'CMO',
            image: 'https://via.placeholder.com/150',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }

    const teamArray = Object.values(team);

    return teamArray;
}

export default Team;
