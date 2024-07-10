import React from 'react';
import Profile from './profile';

const teamMembers = [
  { name: 'Alex Campos', role: 'CEO', imageUrl: './alex.jpg' },
  { name: 'Alejandro Campos', role: 'CTO', imageUrl: './alejandro.jpg'},
];

function Gallery() {
  return (
    <div>
      {teamMembers.map((member, index) => (
        <Profile key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} />
      ))}
    </div>
  );
}

export default Gallery;

export { Profile };