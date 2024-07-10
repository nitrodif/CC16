import React from 'react';

function Profile({ name, role, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

export default Profile;